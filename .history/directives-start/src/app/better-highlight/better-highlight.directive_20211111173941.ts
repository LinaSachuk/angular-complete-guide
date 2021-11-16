import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit {

  @HostBinding() backgroundColor : string;

  constructor(private elRef : ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

@HostListener('mouseenter') mouseover(eventData: Event){
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');

}

@HostListener('mouseleave') mouseleave(eventData: Event){
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');

}
}