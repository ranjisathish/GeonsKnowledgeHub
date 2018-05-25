import { Component,Input ,OnChanges , OnInit,EventEmitter,Output ,
  DoCheck,SimpleChanges,ViewEncapsulation,AfterContentInit,
  AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';





@Component({
  selector: 'app-gamecontroller',
  templateUrl: './gamecontroller.component.html',
  styleUrls: ['./gamecontroller.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class GamecontrollerComponent implements OnInit,OnChanges,
DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,
AfterViewChecked,OnDestroy {
interval ;
title='Game';
@Output() intervalfired=new EventEmitter<number>();

lastnumber = 0;
  constructor() { 
    console.log ('this is the constructor');
  }
  ngOnChanges(changes:SimpleChanges)
  {
    console.log ('this is OnChanges'); 
    console.log (changes); 
  }
  ngOnInit() {
    console.log ('this is  ngOnInit');
  }
 
  ngDoCheck()
  {
    console.log ('this is DoCheck');
  }
  ngAfterContentInit() {
    console.log ('this is  ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log ('this is  ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log ('this is  ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log ('this is   ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log ('this is   ngOnDestroy');
  }
startGame()
{
 this.interval=setInterval(()=>{
   this.intervalfired.emit(this.lastnumber+1);
   this.lastnumber++;},1000); 
   
}
pauseGame()
{
  clearInterval(this.interval);
 
}
}
