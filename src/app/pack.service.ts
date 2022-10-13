import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  constructor( private _http : HttpClient) { }

  public getAllPackByHotelId( id : any):Observable<any>{
    return this._http.get<any>("http://localhost:8080/hotels/packs?id="+id , id);
  }
}
