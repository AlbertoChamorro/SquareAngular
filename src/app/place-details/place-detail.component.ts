import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html'
})
export class PlaceDetailComponent {
    places: any = [
        {id: 1, name: 'Floreria la Gardenia', description: 'es un negocio abierto', plan: 'pagado',
            closeTime: 1, distance: 1,  active: true},
        {id: 2, name: 'Donas las pasaditas', description: 'es un negocio dinamico', plan: 'gratuito',
            closeTime: 3, distance: 1.8, active: false},
        {id: 3, name: 'Veterinaria huellitas felices', description: 'no se encontro referencia', plan: 'gratuito',
            closeTime: 2, distance: 2, active: true}
    ];
    id = null;
    place: any = {};

    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        console.log('params - ', this.id);
        console.log('query strings - ', this.route.snapshot.queryParams['action']);
        this.place = this.findPlace();
        console.log('place find -> ', this.place);
    }

    findPlace() {
        return this.places.filter((place) => { return place.id == this.id })[0] || null;
    }
}
