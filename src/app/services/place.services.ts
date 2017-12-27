import { Injectable } from '@angular/core';
@Injectable()

export class PlaceService {
  places: any = [
      {id: 1, name: 'Masaya', description: 'es un negocio abierto', plan: 'pagado',
          closeTime: 1, distance: 1,  active: true},
      {id: 2, name: 'León', description: 'es un negocio dinamico', plan: 'gratuito',
          closeTime: 3, distance: 1.8, active: false},
      {id: 3, name: 'Rivas', description: 'no se encontro referencia', plan: 'gratuito',
          closeTime: 2, distance: 2, active: true},
      {id: 4, name: 'Managua', description: 'es un negocio dinamico', plan: 'gratuito',
          closeTime: 3, distance: 3.8, active: false},
      {id: 5, name: 'Chinandega', description: 'no se encontro referencia', plan: 'gratuito',
          closeTime: 3, distance: 20, active: true}
  ];
  constructor() {}

  public getPlaces() {
    return this.places;
  }

  public findPlace(id) {
    return this.places.filter((place) => { return place.id == id })[0] || null;
  }
}
