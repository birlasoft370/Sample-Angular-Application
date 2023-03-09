import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustaddComponent } from './custadd/custadd.component';
import { CustlistingComponent } from './custlisting/custlisting.component';
import { CustomerComponent } from './customer/customer.component';
import { DestAddComponent } from './dest-add/dest-add.component';
import { DestListComponent } from './dest-list/dest-list.component';
import { DestMainComponent } from './dest-main/dest-main.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './Guard/role.guard';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { EmployeeGuard } from './Guard/employee.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent, canActivate: [RoleGuard] },
  {
    path: 'designation', component: DestMainComponent, children: [
      { path: '', component: DestListComponent },
      { path: 'create', component: DestAddComponent },
      { path: 'edit/:id', component: DestAddComponent }
    ], //canActivate: [AuthGuard] 
  },
  {
    path: 'employee', component: EmployeeComponent, children: [
      { path: '', component: EmplistingComponent },
      { path: 'create', component: EmpaddComponent },
      { path: 'edit/:id', component: EmpaddComponent },
    ], canActivate: [EmployeeGuard]
  },
  {
    path: 'customer', component: CustomerComponent, children: [
      { path: '', component: CustlistingComponent },
      { path: 'create', component: CustaddComponent },
      { path: 'edit/:id', component: CustaddComponent },
    ], canActivate: [RoleGuard]
  },
  { path: 'user', component: UserComponent, canActivate: [RoleGuard] },
  { path: "**", redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
