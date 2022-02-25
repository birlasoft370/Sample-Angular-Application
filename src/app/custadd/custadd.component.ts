import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-custadd',
  templateUrl: './custadd.component.html',
  styleUrls: ['./custadd.component.css']
})
export class CustaddComponent implements OnInit {

  saveresp: any;
  messageclass = '';
  message = '';
  EditData: any;
  Customerid: any;

  constructor(private service: CustomerService, private route: ActivatedRoute) {
    this.Customerid = this.route.snapshot.paramMap.get('id');
    if (this.Customerid != null && this.Customerid != 0) {
      this.UpdateCustomer(this.Customerid);
    }
  }

  ngOnInit(): void {
  }

  customerform = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
  });


  SaveCustomer() {
    // console.log(this.employeeform.valid);
    if (this.customerform.valid) {
      //console.log(this.employeeform.value);
      this.service.SaveCustomer(this.customerform.value).subscribe(result => {
        this.saveresp = result;
        if (this.saveresp.result == 'pass') {
          this.message = "Saved Sucessfully";
          this.messageclass = 'sucess';
          this.customerform.reset();
        } else {
          this.message = "save failed";
          this.messageclass = 'error';
        }
      })
    } else {
      this.message = "Please enter valid data"
      this.messageclass = 'error'
    }
  }

  UpdateCustomer(id: any) {
    this.service.LoadCustomerbyId(id).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.customerform = new FormGroup({
          id: new FormControl(this.EditData.id),
          name: new FormControl(this.EditData.name),
          email: new FormControl(this.EditData.email),
          phone: new FormControl(this.EditData.phone)
        });
      }
    })
  }

  get name() {
    return this.customerform.get('name');
  }
  get phone() {
    return this.customerform.get('phone');
  }
  get email() {
    return this.customerform.get('email');
  }

}
