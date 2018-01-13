import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Injectable()

export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
   // this.isLogged();
  }

  public logIn = (email, password) => {
    console.log ('login');
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        this.router.navigate(['places']);
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
           this.router.navigate(['places']);
        })
        .catch(error => {
           console.log(error);
        });
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public singUp() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['places']);
  }

  public getUser() {
    return this.angularFireAuth.auth;
  }
}
