import { Component } from '@angular/core';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged = false;
  constructor(private authService: AuthService) {
     this.authService.isLogged().subscribe((result) => {
          //console.log();
         // debugger
          if(result && result.uid){
            this.isLogged = true;
          }else{
            this.isLogged = false;
          }
     }, (error) => {
        this.isLogged = false;
     });
  }
}
