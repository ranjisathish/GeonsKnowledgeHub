import { Component, OnInit, Input } from '@angular/core';
import { SavetreesModel } from './savetrees.model';
import {LogService} from '../logservice.service';


@Component({
  selector: 'app-savetrees',
  templateUrl: './savetrees.component.html',
  styleUrls: ['./savetrees.component.css'],
  providers:[LogService]
})
export class SavetreesComponent implements OnInit {
  treeslist: SavetreesModel[] = [new SavetreesModel('Eastern Pine',
  'Pine', 'assets/images/pinetree.png'), new SavetreesModel('Rosewood Pine',
  'Pine', 'assets/images/pinetree.png')];
  @Input() elmt: {type: string, name: string};
  @Input() addValue: string;
  selectedlist:SavetreesModel[];
  constructor(private logservice:LogService) {
    this.logservice.LogMessage(this.treeslist[0].name);
   }

  ngOnInit() {

  }
  selected(trees:SavetreesModel)
  {
 console.log (trees.name);
  }
}
