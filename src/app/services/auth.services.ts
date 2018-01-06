import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()

export class AuthService {
 // API_ENDPOINT = 'https://squareangular.firebaseio.com';
 // places: any = [];
  constructor(private afDB: AngularFireDatabase, private http: Http) {}

  public login = (email, password) => {
    console.log ('login');
  }

  public register = (email, password) => {
    console.log ('register');
  }

}
