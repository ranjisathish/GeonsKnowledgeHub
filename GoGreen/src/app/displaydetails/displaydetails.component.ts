import { Component, OnInit,AfterContentInit,
  Input,OnChanges,SimpleChanges,OnDestroy,
  ElementRef,AfterContentChecked,ContentChild} from '@angular/core';



@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit,OnChanges,OnDestroy,AfterContentInit,AfterContentChecked {
 @Input()  msgWelcome:string;
 @Input() name:string;
 @ContentChild('contentchild') para:ElementRef;
 //@Input()  addvalue:{typeof:string,amount:number};
 @Input('passValue')  addvalue:{typeof:string,amount:number};
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges)
  {
    console.log ('this is OnChanges'); 
    console.log (changes); 
  }
  ngOnDestroy() {
    console.log ('this is   ngOnDestroy');
  }
  ngAfterContentInit() {
    console.log ('this is  AfterContentInit' +this.para.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log ('this is  ngAfterChildContent' +this.para.nativeElement.textContent);
  }
}
