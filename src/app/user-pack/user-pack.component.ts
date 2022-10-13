import { Router } from '@angular/router';
import { LoginUserPackService } from './../login-user-pack.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { UserPack } from '../user-pack';
import { UserPackService } from '../user-pack.service';

@Component({
  selector: 'app-user-pack',
  templateUrl: './user-pack.component.html',
  styleUrls: ['./user-pack.component.css']
})
export class UserPackComponent implements OnInit {

  user : User = new User();
  _get_pack_id : number =0 ;

  _newUser : User = new User();
  _userPack : UserPack = new UserPack();

  session : any;
  submitted : boolean = false;

  _checkIn : Date | undefined;
  _checkOut : Date | undefined;
  _numberOfPeople :  number =0;
  _newUserId : number = 0 ;

  constructor(private  _login_user_pack_service : LoginUserPackService , 
              private _user_pack_service : UserPackService ,
              private _router : Router) { }

  ngOnInit(): void {
    this.user = this._login_user_pack_service._user;
    this._get_pack_id = this._login_user_pack_service._pack_id;
     const _HiUser  = localStorage.getItem('token')
     console.log(_HiUser)

     let data : any = localStorage.getItem('token');
    this.session = JSON.parse(data);
    console.log(this.session.userId)
  }

  onSubmit(){
    
     this._userPack = {
      "userPackId" : 0,
      "numberOfPeople":this._numberOfPeople,
      "checkIn" : this._checkIn,
      "checkOut" : this._checkOut
    }

    

    console.log(this._userPack)
    this._newUserId = this.user.userId;

    this._user_pack_service.addPackageWithUserId(this._userPack , this._newUserId , this._get_pack_id).subscribe(
       data => {
        console.log("added")
        alert("Booking SuccessFull ! Goto Home Page")
        this._router.navigate(['/home'])
       }
    )


  }


}
