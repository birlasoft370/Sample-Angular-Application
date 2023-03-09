import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestService } from './service/dest.service';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'AngularCRUDWithReactiveBootstrapJwt';
  displaymenu = false;
  displayemployee = false;
  displayuser = false;
  currentrole: any;
  menulist: any;
  loggedInuser = '';
  isNavbarCollapsed=true;

  constructor(private service: LoginService, private route: Router, private destService: DestService) {
  }
  ngOnInit(): void {
    this.service.updatemenu.subscribe(res => {
      // this.MenuDisplay();
      this.LoadMenu();
    });
    //  this.MenuDisplay();
    this.LoadMenu();
  }

  ngDoCheck(): void {
    if (this.route.url == '/login') {
      this.displaymenu = false
    } else {
      this.displaymenu = true
    }
    this.destService.RefreshRequired.subscribe(response => {
      this.LoadMenu();
    })
  }

  MenuDisplay() {
    if (this.service.GetToken() != '') {
      this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
      this.displayemployee = this.currentrole == 'admin';
      this.displayuser = (this.currentrole == 'admin' || this.currentrole == 'user')
    }
  }

  LoadMenu() {
    if (this.service.GetToken() != '') {
      this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
      this.service.GetMenubyrole(this.currentrole).subscribe(result => {
        this.menulist = result;
        //console.log(this.menulist);
        this.loggedInuser=this.service.Getunique_namebyToken(this.service.GetToken());
      });
    }
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['login']);
  }

}
