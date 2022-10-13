import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private http : HttpClient , private _router : Router) { }

  public loginUser(email : String , password : String ) : Observable<any>{
    return this.http.get<any>("http://localhost:8080/login?email="+email+"&password="+password);
  }

  public userRegistration(user : User) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/register",user);
  }

  public loggedIn(){
    return !!localStorage.getItem('token');
  }

  public logout(){
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }
}
