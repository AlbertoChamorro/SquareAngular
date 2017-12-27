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
      var address = this.place.street + ',' + this.place.city + ',' + this.place.country;
      this.placeService.getGeoData(address)
             .subscribe(response => {
                  //debugger;
                  const location = response.json().results[0].geometry.location;
                  this.place.lat = location.lat;
                  this.place.lng = location.lng;
                  this.place.id = Date.now();
                  this.placeService.save(this.place);
                  alert('Se ha guardado un nuevo negocio...');
                  this.place = {};
            });
  }
}
