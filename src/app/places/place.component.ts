import { Component } from '@angular/core';
import { PlaceService } from '../services/place.services';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html'
})
export class PlaceComponent {
    title = 'Squared App';
    places: any = [];
    lat: number = 11.9711183;
    lng: number = -86.1030404;

    constructor(private placeService: PlaceService) {
        placeService.getPlaces().valueChanges()
            .subscribe((places) => {
                //debugger;
                this.places = places;
            });
    }
}
