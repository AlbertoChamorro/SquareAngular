import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.services';
@Injectable()

export class VerifySessionGuardService implements CanActivate {
    isLogged = false;
    constructor(private authService: AuthService) {
      this.authService.isLogged().subscribe((result) => {
            if(result && result.uid) {
              this.isLogged = true;
            }else{
              this.isLogged = false;
            }
        }, (error) => {
          this.isLogged = false;
        });
    }

    canActivate() {
      return this.isLogged;
    }

}
