import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username='';
  allowclick=false;
  checkValue='';
  onInput(event:Event)
  {
    this.checkValue=(<HTMLInputElement>event.target).value;
    if ((this.checkValue)==null)
    this.allowclick=false;
    else
    this.allowclick=true;
  }
  onClick()
  {
    this.username="";
  }
}
