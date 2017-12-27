import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()

export class PlaceService {
  places: any = [];
  constructor(private afDB: AngularFireDatabase) {}

  public getPlaces() {
    return this.afDB.list('places/');
  }

  public findPlace(id) {
    return this.places.filter((place) => { return place.id == id })[0] || null;
  }

  public save(place) {
    this.afDB.database.ref('places/' + place.id).set(place);
  }
}
