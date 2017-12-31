import { Component } from '@angular/core';
import { PlaceService } from '../services/place.services';
import { animate, trigger, state, style, transition } from '@angular/animations';
import swal from 'sweetalert2';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  animations: [
      trigger('containerFadeAnimation', [
          state('initialState', style({
              opacity: 0,
              // backgroundColor: 'green',
              // transform: 'rotate3d(0, 0, 0, 0deg)'
          })),
          state('finalState', style({
            opacity: 1,
            // backgroundColor: 'yellow',
            // transform: 'rotate3d(5, 10, 20, 30deg)'
          })),
          transition('initialState => finalState', animate(2000)),
          transition('finalState => initialState', animate(1000)),
      ]),
  ]
})

export class PlaceComponent {
    title = 'Squared App';
    initialState = 'initialState';
    finalState = 'finalState';
    animationState = this.initialState;
    places: any = [];
    lat: number = 11.9711183;
    lng: number = -86.1030404;

    constructor(private placeService: PlaceService) {
        placeService.getPlaces()
        //.valueChanges()
            .subscribe((places) => {
                //debugger;
                this.places = Object.keys(places).map(key => { return places[key]; });
                this.animationState = this.finalState;
                //debugger;
            }, (error) => {
               console.log(error);
               swal('Mensaje de error', 'Ha ocurrido un error, intente de nuevo más tarde!', 'error');
            });
    }
}
