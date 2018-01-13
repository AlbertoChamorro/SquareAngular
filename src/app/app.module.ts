import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// animations modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PlaceComponent } from './places/place.component';
import { PlaceCreateComponent } from './places/create/place-create.component';
import { PlaceDetailComponent } from './place-details/place-detail.component';
// modules
import { FormsModule } from '@angular/forms'; // for to way data binding
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
// directives
import { CustomDirective } from './directives/custom.directive';
import { CountAnalitycsDirective } from './directives/count-analitycs.directive';
// services
import { AuthService } from './services/auth.services';
import { PlaceService } from './services/place.services';
import { VerifySessionGuardService } from './services/verify-session-guard.services';
// dependencies Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
// pipes customize
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { PlaceScaffoldUnitTestComponent } from './place-scaffold-unit-test/place-scaffold-unit-test.component';

const routes: Routes = [
  {path: '',                   component: PlaceComponent},
  {path: 'login',              component: LoginComponent},
  {path: 'register',           component: RegisterComponent},
  {path: 'places',             component: PlaceComponent},
  {path: 'places/create/:id',  component: PlaceCreateComponent, canActivate: [VerifySessionGuardService] },
  {path: 'contact',            component: ContactComponent},
  {path: 'places/detail/:id',  component: PlaceDetailComponent},
];

export const firebaseConfig = {
  apiKey: 'AIzaSyCpHpW7RhcgfALOn5Crx45Hf678oS86bIA',
  authDomain: 'squareangular.firebaseapp.com',
  databaseURL: 'https://squareangular.firebaseio.com',
 // projectId: 'squareangular',
  storageBucket: 'squareangular.appspot.com',
  messagingSenderId: '136999254028'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    PlaceComponent,
    PlaceCreateComponent,
    PlaceDetailComponent,
    CustomDirective,
    CountAnalitycsDirective,
    LinkifystrPipe,
    PlaceScaffoldUnitTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbC5YZ8SCY80SC0LZUVos_WcWE2LMd8MA'
    }),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [PlaceService, AuthService, VerifySessionGuardService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
