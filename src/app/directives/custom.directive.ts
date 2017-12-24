import {Directive, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[custom]'
})

export class CustomDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input('custom') plan: string = '';
  ngOnInit() {
    if (this.plan === 'pagado') {
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }
  }
}
