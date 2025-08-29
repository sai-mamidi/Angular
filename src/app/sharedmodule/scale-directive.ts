import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from "@angular/core";

@Directive({
    selector: "[scaler]"
})

export class ScaleDirective {
    constructor(private el : ElementRef, private rendere: Renderer2) {
        
    }

    @Input() color = 'red';

    @HostListener('click') onMouseEnter(){
        this.rendere.setStyle(this.el.nativeElement, 'color', this.color)
    }


    @HostListener('dblclick') removeStyles(){
        this.rendere.removeStyle(this.el.nativeElement, 'color')
    }






























}