import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Squared App';
  disabled = false;
  name: string = '';
  sites: any = [
                {closeTime: 1, distance: 1, name: 'Floreria la Gardenia', active: true, plan: 'pagado'},
                {closeTime: 3, distance: 1.8, name: 'Donas las pasaditas', active: false, plan: 'gratuito'},
                {closeTime: 2, distance: 2, name: 'Veterinaria huellitas felices', active: true, plan: 'gratuito'}
              ];
  lat: number = 11.9711183;
  lng: number = -86.1030404;

  constructor() {
    setTimeout(() => {
      this.disabled = true;
    }, 3000);
  }

  make() {
    alert('make code...');
  }
}
