import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor: string;

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter') mouseEnter(): void {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(): void {
    this.resaltar(null);
  }

  private resaltar(color: string): void{
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
