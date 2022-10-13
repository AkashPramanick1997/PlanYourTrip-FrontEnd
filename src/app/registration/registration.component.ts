import { Router } from '@angular/router';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user  = new User();
  msg ='';
  constructor( private service : RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegistration(){
    this.service.userRegistration(this.user).subscribe(
      data=>{console.log("success");
      this.msg="Registration Successfull!"
      alert("Welcome User! Your Registration was successfull!")
      this.router.navigate(['/login'])
    } ,
    error =>{
      console.log("Ereor");
      this.msg="Error";
    }
    )
  }
}
