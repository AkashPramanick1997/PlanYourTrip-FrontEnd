import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http : HttpClient) { }

  public getPackage( msg : String) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/packs" , msg);
  }

  public getOrganization() : Observable<any>{
    return this.http.get<any>("http://localhost:8080/organization");
  }

}
