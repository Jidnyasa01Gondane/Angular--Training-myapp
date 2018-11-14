import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  EmpDetails =[
    {eId:101,eName:"Jay",eNumber:1000,eBgroup:'B-'},
    {eId:102,eName:"Raj",eNumber:1000,eBgroup:'AB+'},
    {eId:103,eName:"Aman",eNumber:1000,eBgroup:'O+'},
    {eId:104,eName:"Vijay",eNumber:1000,eBgroup:'B+'},
    {eId:105,eName:"Gaurav",eNumber:1000,eBgroup:'A+'}
  ]
  ShowDetails(empId,eBgroup){
    this.router.navigate(['home/details', empId], {queryParams: {Bgroup: eBgroup}});
  }

}
