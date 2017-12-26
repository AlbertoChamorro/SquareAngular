import { Component } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html'
})
export class PlaceComponent {
    title = 'Squared App';
    places: any = [
                  {id: 1, name: 'Floreria la Gardenia', plan: 'pagado', closeTime: 1, distance: 1,  active: true},
                  {id: 2, name: 'Donas las pasaditas', plan: 'gratuito', closeTime: 3, distance: 1.8, active: false},
                  {id: 3, name: 'Veterinaria huellitas felices', plan: 'gratuito', closeTime: 2, distance: 2, active: true}
                ];
    lat: number = 11.9711183;
    lng: number = -86.1030404;

    constructor() {}
}
