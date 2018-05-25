import { Component } from '@angular/core';



@Component ({
    selector:"app-server",
    templateUrl:"./server.component.html"
})
export class ServerComponent {
    setValue="";
    servers =[];
      /* onClickView(event:any){
        console.log (event);

    }*/
    onClickView(event: Event) {
        this.setValue = (<HTMLInputElement>event.target).value;

    }
    onAdd()
    {
        this.servers.push('Add server');
    }
    onRemove(ix:number) {
      this.servers.splice(ix,1);
    }
    }