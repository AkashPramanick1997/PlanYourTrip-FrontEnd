import { HotelPackService } from './../hotel-pack.service';
import { LoginUserPackService } from './../login-user-pack.service';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Route, Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId : String ='';
  password : String ='';

  _user_Pack : any;

  _packId : any;
  user : User = new User();
  _newUser: User  = new User();
  msg ='';
  constructor(  private service : RegistrationService, 
                private route : Router,
                private _login_user_service : LoginUserPackService , 
                private _hotel_pack_service : HotelPackService) { }

  ngOnInit(): void {
    this._packId = this._hotel_pack_service._hotelIdFromHotel;
  }
  loginUser(){
    this.service.loginUser(this.emailId , this.password).subscribe(
      data => {
        this._newUser=data;
        this._login_user_service._user = this._newUser;
        localStorage.setItem('token', JSON.stringify(data))
        if(this._packId === 0){
          this.route.navigate(['/home'])
        }
        else
        {
          this.route.navigate(['/user-pack'])
        }
        
      },
      error =>{
        console.log("Error")
        this.msg="Bad Credentials! Please Enter Valid EmailId & Password"
      }
    )
  }

  gotoRegistration(){
    this.route.navigate(['/registration'])
  }

}
