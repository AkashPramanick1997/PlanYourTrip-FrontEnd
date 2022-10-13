import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor( private _http : HttpClient) { }

  public getAllBookings():Observable<any>{
    return this._http.get<any>("http://localhost:8080/bookings");
  }

  public getAllBookingByUserId( id : number):Observable<any>{
    return this._http.get<any>("http://localhost:8080/user-pack?userId="+id);
  }
}
