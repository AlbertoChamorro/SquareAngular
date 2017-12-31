import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceScaffoldUnitTestComponent } from './place-scaffold-unit-test.component';

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

  // it('should create the app component,  () => {
  //   let fixture = TestBed.createComponent(PlaceScaffoldUnitTestComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });
});
