import { Component, OnInit } from '@angular/core';
import {HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-httpcomponent',
  templateUrl: './httpcomponent.component.html',
  styleUrls: ['./httpcomponent.component.css']
})
export class HttpcomponentComponent implements OnInit {

  dataArray: any;

  constructor(private httpService : HttpserviceService) { }

  ngOnInit() {
  }

  getAllPosts(){
    this.httpService.getData().subscribe(res => this.dataArray = res);
  }
  
}
