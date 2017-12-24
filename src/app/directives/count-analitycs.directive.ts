import {Directive, HostListener, HostBinding} from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'li[count-analitycs]'
})

export class CountAnalitycsDirective {
  clicks = 0;
  @HostBinding('style.opacity') opacity: number = .5;
  @HostListener('click', ['$event.target']) onClick(button) {
      console.log('a', button, 'click button in directive...', this.clicks++);
      this.opacity += .1;
  }
}
