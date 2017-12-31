import { Component, OnInit } from '@angular/core';
import { PlaceScaffoldUnitTestService } from './place-scaffold-unit-test.services';

@Component({
  selector: 'app-place-scaffold-unit-test',
  templateUrl: './place-scaffold-unit-test.component.html',
  styleUrls: ['./place-scaffold-unit-test.component.css'],
  // import service in one component
  providers: [PlaceScaffoldUnitTestService],
})
export class PlaceScaffoldUnitTestComponent implements OnInit {
  places = [];
  constructor(private placeScaffoldUnitTestService: PlaceScaffoldUnitTestService) {
    this.places = placeScaffoldUnitTestService.getPlaces();
   }

  ngOnInit() {}

}
