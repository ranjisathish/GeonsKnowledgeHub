import { Component, OnInit,ViewChild,ElementRef,EventEmitter,Output } from '@angular/core';
import { AddlistModel } from '../../shared/addlist.model';




@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
@ViewChild('itemname') name:ElementRef;
@ViewChild('itemamount') amount:ElementRef;

@Output() addToList=new EventEmitter<AddlistModel>() ;
  constructor() { }

  ngOnInit() {
  }
  onAdd()
  {
    const addname=this.name.nativeElement.value;
    const addamt=this.amount.nativeElement.value;
    this.addToList.emit(new AddlistModel(addname,addamt));
  }
}
