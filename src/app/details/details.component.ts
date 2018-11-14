import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  paramSub: any;
  paramSub2: any;
  Bgroup: 'B+';

  constructor(private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.paramSub = this.activeRoute.params.subscribe(params => this.id = params['empId']);
    this.paramSub2 = this.activeRoute.queryParams.subscribe(params => this.Bgroup = params['Bgroup']);
  }
  ngonDestroy() {
    this.paramSub.unsubscribe();
    this.paramSub2.unsubscribe();
  }

}
