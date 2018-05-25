import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { SavetreesModel } from '../savetrees.model';
import {LogService} from '../../logservice.service';


@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  providers:[LogService]
})
export class PlantComponent implements OnInit {
  // plantlist: SavetreesModel[] = [new SavetreesModel('thulsi',
  // 'Pine', 'assets/images/pinetree.png'), new SavetreesModel('Hibiscus',
  // 'Pine', 'assets/images/pinetree.png')];

  @Input() listtreee:SavetreesModel[]; 
 @Output() wasSelected=new EventEmitter<void>();
  constructor(private logservice:LogService) {
  //  this.logservice.LogMessage(this.plantlist[0].name);
   }

  ngOnInit() {
  }
  onselcted()
  {
     this.wasSelected.emit();
  }
}
