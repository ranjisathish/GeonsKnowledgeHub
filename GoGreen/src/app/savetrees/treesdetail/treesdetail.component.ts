import { Component, OnInit ,Input} from '@angular/core';
import { SavetreesModel } from '../savetrees.model';

@Component({
  selector: 'app-treesdetail',
  templateUrl: './treesdetail.component.html',
  styleUrls: ['./treesdetail.component.css']
})
export class TreesdetailComponent implements OnInit {
  @Input() listtreee:SavetreesModel[]; 
  constructor() { }

  ngOnInit() {
  }

}
