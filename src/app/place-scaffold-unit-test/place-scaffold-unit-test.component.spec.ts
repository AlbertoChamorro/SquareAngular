import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceScaffoldUnitTestComponent } from './place-scaffold-unit-test.component';
import { PlaceScaffoldUnitTestService } from './place-scaffold-unit-test.services';

describe('PlaceScaffoldUnitTestComponent', () => {

  let component: PlaceScaffoldUnitTestComponent;
  let fixture: ComponentFixture<PlaceScaffoldUnitTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceScaffoldUnitTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceScaffoldUnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should integrate services in component places unit test', () => {
    const placeServices = fixture.debugElement.injector.get(PlaceScaffoldUnitTestService);
    expect(component.places).toEqual(placeServices.places);
  });

  // it('should create the app component,  () => {
  //   let fixture = TestBed.createComponent(PlaceScaffoldUnitTestComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });
});
