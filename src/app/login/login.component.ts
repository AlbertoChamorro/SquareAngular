import { Component } from '@angular/core';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user: any = {};
  constructor(private authService: AuthService) {}

  public logIn = () => {
    this.authService.logIn(this.user.email, this.user.password);
  }
}
