import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-custlisting',
  templateUrl: './custlisting.component.html',
  styleUrls: ['./custlisting.component.css']
})
export class CustlistingComponent implements OnInit {
  customerdata: any;
 
  constructor(private service: CustomerService) {
    this.LoadAll();
  }

  ngOnInit(): void {
  }

  LoadAll() {
    this.service.LoadAllCustomer().subscribe(result => {
      this.customerdata = result;
    });
  }

  delete(id: any) {
    if (confirm("Do you want remove?")) {
      this.service.RemoveCustomerbyid(id).subscribe(result => {
        this.LoadAll();
      });
    }
  }


}
