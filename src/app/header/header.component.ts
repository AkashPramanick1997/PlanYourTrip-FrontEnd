import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _registrationService : RegistrationService) { }

  session : any;

  ngOnInit(): void {

    let data : any = localStorage.getItem('token');
    this.session = JSON.parse(data);

  }


}
