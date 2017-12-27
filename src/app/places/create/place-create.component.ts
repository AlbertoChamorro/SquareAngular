import { Component } from '@angular/core';
import { PlaceService } from '../../services/place.services';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html'
})
export class PlaceCreateComponent {
  place: any = {};

  constructor(private placeService: PlaceService) {}

  save() {
      this.placeService.save(this.place);
  }
}
