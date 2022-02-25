import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl_customer = 'http://localhost:41055/Customer';

  constructor(private http: HttpClient) { }

  LoadAllCustomer(): Observable<object> {
    return this.http.get(this.apiurl_customer);
  }
  LoadCustomerbyId(id: any) {
    return this.http.get(this.apiurl_customer + '/' + id);
  }
  RemoveCustomerbyid(id: any) {
    return this.http.delete(this.apiurl_customer + '/' + id);
  }
  SaveCustomer(inputdata: any) {
    return this.http.post(this.apiurl_customer, inputdata);
  }
}
