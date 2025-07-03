import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  @Input('appHighlighter') highlightColor: string = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor)
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor')
    this.renderer.removeStyle(this.el.nativeElement, 'color')
  }

}
