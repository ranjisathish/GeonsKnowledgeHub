import { Component, OnInit } from '@angular/core';

@Component({
 // selector: 'app-comp-name',    //used as element
 //  selector:'[app-comp-name]',    //used as attribute    
     selector:'.app-comp-name',    //used as class    
  //templateUrl: './comp-name.component.html',
  template:'<app-server></app-server>',
  styleUrls: ['./comp-name.component.css']
   
})
export class CompNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
