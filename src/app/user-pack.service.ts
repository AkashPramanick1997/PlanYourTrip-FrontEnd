import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPack } from './user-pack';

@Injectable({
  providedIn: 'root'
})
export class UserPackService {

  constructor( private _http : HttpClient) { }

  public addPackageWithUserId(userPack : UserPack , userId : number , packId : number | any): Observable<any>{
    return this._http.post<any>("http://localhost:8080/user-pack?userId="+userId +"&packId="+packId, userPack);
  }
}
