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
      this.place.id = Date.now();
      this.placeService.save(this.place);
      alert('Se ha guardado un nuevo negocio...');
      this.place = {};
  }
}
