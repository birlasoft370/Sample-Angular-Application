import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { DestMainComponent } from './dest-main/dest-main.component';
import { DestAddComponent } from './dest-add/dest-add.component';
import { DestListComponent } from './dest-list/dest-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustlistingComponent } from './custlisting/custlisting.component';
import { CustaddComponent } from './custadd/custadd.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmployeeComponent,
    EmplistingComponent,
    EmpaddComponent,
    DestMainComponent,
    DestAddComponent,
    DestListComponent,
    CustomerComponent,
    CustlistingComponent,
    CustaddComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
