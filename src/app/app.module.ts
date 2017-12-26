import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PlaceComponent } from './places/place.component';
import { PlaceDetailComponent } from './place-details/place-detail.component';
// modules
import { FormsModule } from '@angular/forms'; // for to way data binding
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
// directives
import { CustomDirective } from './directives/custom.directive';
import { CountAnalitycsDirective } from './directives/count-analitycs.directive';

const routes: Routes = [
  {path: '',              component: PlaceComponent},
  {path: 'places',        component: PlaceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'places/detail/:id', component: PlaceDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PlaceComponent,
    PlaceDetailComponent,
    CustomDirective,
    CountAnalitycsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbC5YZ8SCY80SC0LZUVos_WcWE2LMd8MA'
    }),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
