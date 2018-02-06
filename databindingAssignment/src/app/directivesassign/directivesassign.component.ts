import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesassign',
  templateUrl: './directivesassign.component.html',
  styleUrls: ['./directivesassign.component.css']
})
export class DirectivesassignComponent implements OnInit {
displayStatus=true;
counter=0;
countClick=[];
  constructor() { }

  ngOnInit() {
  }
  onDisplayClick(){
    this.countClick.push(this.counter++);
    this.displayStatus=!this.displayStatus;
  }
  getColor(){
    return (this.counter>5 ?'Green':'Red');
  }
}
