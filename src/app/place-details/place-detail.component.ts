import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../services/place.services';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html'
})
export class PlaceDetailComponent {
    id = null;
    place: any = {};

    constructor(private route: ActivatedRoute, private placeService: PlaceService) {
        this.id = this.route.snapshot.params['id'];
        console.log('params - ', this.id);
        console.log('query strings - ', this.route.snapshot.queryParams['action']);
        this.place = placeService.findPlace(this.id);
        console.log('place find -> ', this.place);
    }
}
