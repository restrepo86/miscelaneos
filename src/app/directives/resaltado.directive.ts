import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    console.log("Directiva llamada");
    
  }

  @HostListener('mouseenter') mouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseSalio() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }

}
