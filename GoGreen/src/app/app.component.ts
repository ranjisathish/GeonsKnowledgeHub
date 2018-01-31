import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
 styles:['div{color:green}']
})
export class AppComponent {
  title = 'Go Green';
  name='';
  message='';
  allowClick=false;
  
  constructor()
  {
    setTimeout(() =>
    {
      this.allowClick=true
    },2000);
    
  }
  displayMsg()
  {
    this.message="Good Msg"
  }
  
  }
  