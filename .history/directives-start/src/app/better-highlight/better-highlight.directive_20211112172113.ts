import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit {
@Input() defaultColor : string = 'transparent';
@Input() highlightColor : string = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor : string = this.defaultColor;

  constructor(private elRef : ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

@HostListener('mouseenter') mouseover(eventData: Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
this.backgroundColor = this.;highlightColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  this.backgroundColor = this.defaultColor;

}
}