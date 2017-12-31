import { Injectable } from '@angular/core';
@Injectable()

export class PlaceScaffoldUnitTestService {
  places: any = [
    {id: 1, name: 'Aleman HQ'},
    {id: 2, name: 'Jose Jose JR'},
  ];

  public getPlaces() {
     return this.places;
  }
}
