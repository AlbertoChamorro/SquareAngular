import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()

export class PlaceService {
  places: any = [];
  constructor(private afDB: AngularFireDatabase, private http: Http) {}

  public getPlaces() {
    return this.afDB.list('places/');
  }

  public findPlace(id) {
    return this.places.filter((place) => { return place.id == id })[0] || null;
  }

  public save(place) {
    this.afDB.database.ref('places/' + place.id).set(place);
  }
  public getGeoData(address) {
    const apiKeyGoogleMaps = 'AIzaSyCtSHKUqipE8nIz5gbXyMIIIi1SJ6_xyrc';
    const url = 'https://maps.google.com/maps/api/geocode/json?key=' + apiKeyGoogleMaps + '&address=' + address;
    return this.http.get(url);
  }
}
