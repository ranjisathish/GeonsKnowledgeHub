import { Directive,OnInit,ElementRef, Renderer2,HostListener ,HostBinding } from '@angular/core';



@Directive({
  selector: '[appHighligthcolor]'
})
export class HighligthcolorDirective implements OnInit {
@HostBinding ('style.backgroundColor') background='yellow';
  // constructor(private elementRef:ElementRef) { }

  // ngOnInit(){
  //  this.elementRef.nativeElement.style.backgroundColor='Yellow';
  // }
  
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
   //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
  //  this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
  this.background='blue';
}
  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent');
    this.background='transparent';
  }

}
