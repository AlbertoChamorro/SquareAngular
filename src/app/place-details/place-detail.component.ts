import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html'
})
export class PlaceDetailComponent {
    constructor(private route: ActivatedRoute) {
        console.log('params - ', this.route.snapshot.params['id']);
    }
}
