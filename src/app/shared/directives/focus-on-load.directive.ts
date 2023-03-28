import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusOnLoad]',
})
export class FocusOnLoadDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.focus();
  }
}
