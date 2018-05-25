import { Component, OnInit,Input } from '@angular/core';
import { AddlistModel } from '../shared/addlist.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
   addValue: string;
  txtname= '';
    addList: AddlistModel[] = [new AddlistModel('Fertilizers', 1500), new AddlistModel('Mud', 2500)]
  constructor() { }

  ngOnInit() {
  }
getValue()
{
  this.addValue= this.txtname;
}
addthis(addtolist:AddlistModel)
{
  this.addList.push(addtolist);
}
}
