import { Component ,OnChanges,SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
 styles:['div{color:green}']
})
export class AppComponent  {
  title = 'Go Green';
  name  = '';
  message = '';
  allowClick = false;
  disableStatus = true;
  adddetl = [{typeof: 'bag' ,amount: 100},{typeof:'watch' ,amount:1000}];
  displayfeature='trees';
  value=15;
  constructor()
  {
    // setTimeout(() =>
    // {
    //   this.allowClick=true
    // },2000);
    console.log ('constructor app component');
    
  }
  Onchange()
  {
   this.adddetl.splice(0,1);
  }
  displayMsg()
  {
    this.message='Good Msg';
  }
  // valueAdded(valueadded:{item:string ,amount:number} ){
  //   this.adddetl.push({
  //     typeof:valueadded.item,
  //     amount:valueadded.amt});
  // }
  valueAdded(valueadded){
    this.adddetl.push({
      typeof:valueadded.item,
      amount:valueadded.amount});
  }
  onintervalfired(firedvalue:number)
  {
    console.log (firedvalue);
  }
  navigate(feature)
  {
    this.displayfeature=feature;
  }
  }
  