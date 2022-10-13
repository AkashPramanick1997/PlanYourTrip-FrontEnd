import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pack } from './pack';

@Injectable({
  providedIn: 'root'
})
export class LoginPacksService {

   myData : Pack[] = [];
  constructor() { }

}
