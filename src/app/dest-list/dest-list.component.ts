import { Component, OnInit } from '@angular/core';
import { DestService } from '../service/dest.service';

@Component({
  selector: 'app-dest-list',
  templateUrl: './dest-list.component.html',
  styleUrls: ['./dest-list.component.css']
})
export class DestListComponent implements OnInit {
  destList: any;
  constructor(private service: DestService) {
    this.GetAll();
    this.service.RefreshRequired.subscribe(response => {
      this.GetAll();
    })
  }

  ngOnInit(): void {
  }

  GetAll() {
    this.service.GetAll().subscribe(result => {
      this.destList = result;
    });
  }

  delete(code: any) {

  }

}
