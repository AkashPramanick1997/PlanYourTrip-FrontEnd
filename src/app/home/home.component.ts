import { Organization } from './../organization';
import { HomeService } from './../home.service';
import { Router } from '@angular/router';
import { LoginPacksService } from './../login-packs.service';
import { Component, OnInit } from '@angular/core';
import { Pack } from '../pack';
import { HomeHotelService } from '../home-hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg = "";
  orgId : number=0;
  org : Organization = new Organization();
  packs : Pack[] =[];
  organizations : Organization[]=[];
  constructor( private service : HomeService , private login_packService : LoginPacksService , 
                private router : Router , private home_hotel_service : HomeHotelService) { }

  ngOnInit(): void {
    this.service.getOrganization().subscribe(
      data => {
        this.organizations=data;
      },
      error =>{
        console.log("Error")
      }
    )
  }

  onLogin(){

    // this.service.getPackage(this.msg).subscribe(
    //   data => {
    //     this.packs =data;
    //     this.login_packService.myData = this.packs;
    //     this.router.navigate(['/packs']);
    //   }
    // )  
    this.home_hotel_service.OrganizationIdFromHome=this.orgId
    console.log(this.orgId);
    this.router.navigate(['/hotels']);

  }
  }

