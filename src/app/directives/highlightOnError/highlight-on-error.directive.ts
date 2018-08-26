import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';

@Directive({
  selector: '[appHighlightOnError]'
})
export class HighlightOnErrorDirective implements OnChanges  {

  @Input('control') control: FormControl;

  constructor(private element: ElementRef) {
  }

  @HostListener('change') ngOnChanges() {
      if (this.control.invalid && (this.control.dirty || this.control.touched)) {
        this.addErrorClass();
      }else {
        this.removeErrorClass();
      }
  }

  private addErrorClass() {
    this.element.nativeElement.classList.add('ts-error');
  }

  private removeErrorClass() {
    this.element.nativeElement.classList.remove('ts-error');
  }

}
