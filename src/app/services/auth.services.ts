import { Injectable } from '@angular/core';
@Injectable()

export class AuthService {

  public login = (email, password) => {
    console.log ('login');
  }

  public register = (email, password) => {
    console.log ('register');
  }

}
