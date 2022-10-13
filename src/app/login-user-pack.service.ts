import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserPackService {

  _user : User = new User();
  _pack_id : number =0 ;
  constructor() { }
}
