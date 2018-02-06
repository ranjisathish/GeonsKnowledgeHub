import { Component, OnInit } from '@angular/core';

@Component({
 // selector: 'app-comp-name',    //used as element
 //  selector:'[app-comp-name]',    //used as attribute    
     selector:'.app-comp-name',    //used as class    
  templateUrl: './comp-name.component.html',
  // template:'<p>{{getServerdetails()}} {{serverDetails}}</p><app-server></app-server>',
  styleUrls: ['./comp-name.component.css']
   
})
export class CompNameComponent implements OnInit {
  serverDetails="";
  serverStatus=true;
  displayName=['1','2'];
  constructor() {

   }

  ngOnInit() {
  }
  getServerdetails()
  { //alert("New Server is available");
     this.serverDetails="New Server is available"
       }

       ondblClick() {
         this.serverStatus=false;
         this.serverDetails="No Server"
       } 
       getColor() 
       {
        return this.serverStatus===true ?'lightpink':'red' 
       } 
}
