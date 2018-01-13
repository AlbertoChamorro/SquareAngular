import { Component } from '@angular/core';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged = false;
  user: any =  {};
  constructor(private authService: AuthService) {
     this.authService.isLogged().subscribe((result) => {
          //console.log();
         // debugger
          if(result && result.uid){
            this.isLogged = true;
            this.user.email = result.email;
          }else{
            this.isLogged = false;
          }
     }, (error) => {
        this.isLogged = false;
     });
  }

  public singOut() {
    return this.authService.singUp();
  }

}
