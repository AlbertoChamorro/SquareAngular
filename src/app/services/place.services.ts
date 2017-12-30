import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()

export class PlaceService {
  API_ENDPOINT = 'https://squareangular.firebaseio.com';
  places: any = [];
  constructor(private afDB: AngularFireDatabase, private http: Http) {}

  public getPlaces() {
   // return this.afDB.list('places/');
      return this.http.get(this.API_ENDPOINT + '/places.json');
  }

  public findPlace(id) {
    return this.afDB.object('places/' + id);
  }

  public save(place) {
    //this.afDB.database.ref('places/' + place.id).set(place);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.API_ENDPOINT + '/places.json', place, {headers: headers});
  }

  public update(place) {
    this.afDB.database.ref('places/' + place.id).set(place);
  }

  public getGeoData(address) {
    const apiKeyGoogleMaps = 'AIzaSyCtSHKUqipE8nIz5gbXyMIIIi1SJ6_xyrc';
    const url = 'https://maps.google.com/maps/api/geocode/json?key=' + apiKeyGoogleMaps + '&address=' + address;
    return this.http.get(url);
  }

}
