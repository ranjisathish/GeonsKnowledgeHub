import { Component,Input,ElementRef, OnInit, Output,ViewChild ,SimpleChanges,OnChanges, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {
@Output()  AddClick = new EventEmitter<{item: string, amount: number}>();
item: string;
amt: number;
@ViewChild('itemname') itmname:ElementRef;

adddetails = [{typeof: 'box' , amount: 100}];
  constructor() { }

  ngOnInit() {
  }
  
  onAdd() {
  //  this.adddetails.push({
  //    typeof:this.item,amount:this.amt});
  console.log (this.itmname.nativeElement.value);
  this.AddClick.emit({item: this.itmname.nativeElement.value, amount: this.amt});
  //this.AddClick.emit({item: this.item, amount: this.amt});
  this.item='';
  this.amt=0;
  }
}
