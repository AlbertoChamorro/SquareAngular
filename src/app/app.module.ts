import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// dependency forms module for to way data binding
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { CustomDirective } from './directives/custom.directive';
import { CountAnalitycsDirective } from './directives/count-analitycs.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    CountAnalitycsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbC5YZ8SCY80SC0LZUVos_WcWE2LMd8MA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
