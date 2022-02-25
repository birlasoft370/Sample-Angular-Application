import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DestService } from '../service/dest.service';

@Component({
  selector: 'app-dest-add',
  templateUrl: './dest-add.component.html',
  styleUrls: ['./dest-add.component.css']
})
export class DestAddComponent implements OnInit {

  constructor(private service: DestService) { }
  messageclass = '';
  message = '';
  empdata: any;

  ngOnInit(): void {
    this.service.GetByCode('developer').toPromise().then(result => {
      this.empdata = result;
      this.designationform = new FormGroup({
        code: new FormControl(this.empdata.code),
        name: new FormControl(this.empdata.name)
      });
    }).catch(error => {

    }).finally(() => {

    })
  }

  designationform = new FormGroup({
    code: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required)
  });
  SaveDes() {
    if (this.designationform.valid) {
      //console.log(this.employeeform.value);
      this.service.Save(this.designationform.value).subscribe(result => {
        // this.saveresp = result;
        // if (this.saveresp.result == 'pass') {
        //   this.message = "Saved Sucessfully";
        //   this.messageclass = 'sucess';
        //   this.employeeform.reset();
        // } else {
        //   this.message = "save failed";
        //   this.messageclass = 'error';
        // }

      })
    } else {
      // this.message = "Please enter valid data"
      // this.messageclass = 'error'
    }
  }

  get name() {
    return this.designationform.get('name');
  }
}
