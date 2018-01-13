import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()

export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {
    this.isLogged();
  }

  public logIn = (email, password) => {
    console.log ('login');
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  public register = (email, password) => {
    console.log ('register');
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
           console.log(response);
        })
        .catch(error => {
           console.log(error);
        });
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

}
