import { Component } from '@angular/core';
import { PlaceService } from '../../services/place.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html'
})
export class PlaceCreateComponent {
  place: any = {};
  id: any    = null;

  constructor(private placeService: PlaceService, private route: ActivatedRoute) {
      this.id = route.snapshot.params['id'];
      if (this.id != 'new') {
          console.log('id ', this.id);
          placeService.findPlace(this.id).valueChanges()
            .subscribe(place => {
                this.place = place;
            });
      }
  }

  save() {
      var address = this.place.street + ',' + this.place.city + ',' + this.place.country;
      this.placeService.getGeoData(address)
             .subscribe(response => {
                  //debugger;
                  const results = response.json().results;
                  if (results == null || results.length == 0) {
                      return alert('No se ha podido encontrar un lugar con las ubicaciones dadas.');
                  }
                  const location = results[0].geometry.location;
                  this.place.lat = location.lat;
                  this.place.lng = location.lng;
                  var verboose   = 'editado';
                  if (this.id === 'new') {
                      this.place.id = Date.now();
                      verboose   = 'guardado';
                  }
                  this.placeService.save(this.place);
                  alert('Se ha ' + verboose + ' un nuevo negocio...');
                  this.place = {};
            });
  }
}
