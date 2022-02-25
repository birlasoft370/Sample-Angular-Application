import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tokenresp: any;
  apiurl = 'http://localhost:41055/user/'

  constructor(private http: HttpClient, private router: Router) { }

  private _updatemenu = new Subject<void>();
  get updatemenu() {
    return this._updatemenu;
  }

  Proceedlogin(usercred: any) {
    return this.http.post(this.apiurl + 'authenticate', usercred);
  }
  IsLoggedIn() {
    return localStorage.getItem("token") != null;
  }

  GetToken() {
    return localStorage.getItem("token") || '';
  }
  /*
  HaveAccess() {
    var loginToken = localStorage.getItem("token") || '';
    var _extractToken = loginToken.split('.')[1];
    var _atobdata = atob(_extractToken);
    var _finaldata = JSON.parse(_atobdata);
    if (_finaldata.role == 'admin' || _finaldata.role == 'user') {
      return true;
    }
    else {
      alert('You not having access');
      return false;
    }
    // console.log(_finaldata);
  }
*/
  Logout() {
    alert('Your session expired Or Invalid login credential')
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  GenerateRefreshToken() {
    let input = {
      "jwtToken": this.GetToken(),
      "refreshToken": this.GetRefreshToken()
    }
    return this.http.post(this.apiurl + 'refresh', input);
  }
  GetRefreshToken() {
    return localStorage.getItem("refreshtoken") || '';
  }
  SaveTokens(tokendata: any) {
    localStorage.setItem('token', tokendata.jwtToken);
    localStorage.setItem('refreshtoken', tokendata.refreshToken);
  }

  GetRolebyToken(token: any) {
    let _token = token.split('.')[1];
    this.tokenresp = JSON.parse(atob(_token))
    return this.tokenresp.role;
  }

  GetMenubyrole(role: any) {
    return this.http.get(this.apiurl + 'GetMenubyRole/' + role)
  }

  HaveAccess(role: any, menu: any) {
    return this.http.get(this.apiurl + 'HaveAccess?role=' + role + '&menu=' + menu);
  }
}
