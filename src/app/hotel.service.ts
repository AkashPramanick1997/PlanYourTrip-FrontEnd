import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor( private _http : HttpClient) { }

  public getAllHotelByOrganizationId(orgId : any):Observable<any>{
    return this._http.post("http://localhost:8080/organization/hotels?id="+orgId,orgId)
  }

  }
