import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()

export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth){

  }

  public login = (email, password) => {
    console.log ('login');
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

}
