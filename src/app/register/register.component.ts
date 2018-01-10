import { Component } from '@angular/core';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
    user: any = {};
    constructor(private authService: AuthService) {}

    public register = () => {
       this.authService.register(this.user.email, this.user.password);
    }
}
