import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _registration_service :RegistrationService ,
                private _router : Router){

  }
  canActivate() : boolean {
    if(this._registration_service.loggedIn()){
      return true;
    }else{
        this._router.navigate(['/login'])
        return false;
    }
  }
  
}
