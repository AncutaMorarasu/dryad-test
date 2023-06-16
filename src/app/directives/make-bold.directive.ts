import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMakeBold]'
})
export class MakeBoldDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = '700';
  }
}
