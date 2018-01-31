import { Component } from '@angular/core';



@Component ({
    selector:"app-server",
    templateUrl:"./server.component.html"
})
export class ServerComponent {
    setValue="";
      /* onClickView(event:any){
        console.log (event);
       
    }*/
    onClickView(event:Event){
        this.setValue=(<HTMLInputElement>event.target).value;
       
    }
    }