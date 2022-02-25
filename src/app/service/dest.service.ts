import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Designation } from '../Model/designation';

@Injectable({
  providedIn: 'root'
})
export class DestService {
  apiurl_des = 'http://localhost:41055/Designation';
  private _refreshrequired = new Subject<void>();

  get RefreshRequired() {
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) { }

  GetAll(): Observable<object> {
    return this.http.get(this.apiurl_des);
  }

  GetByCode(code: any): Observable<Designation> {
    return this.http.get<Designation>(this.apiurl_des + '/' + code);
  }
  Save(inputdata: any) {
    return this.http.post(this.apiurl_des, inputdata).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
}
