import { Router } from '@angular/router';
import { HomeHotelService } from './../home-hotel.service';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { HotelPackService } from '../hotel-pack.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  orgId : number | undefined;
  hotels : Hotel[]=[];
  hotelId : Number =0;
  city : any ;
  constructor(  private _home_hotel_service : HomeHotelService , 
                private _hotelService : HotelService,
                private _hotel_pack_service : HotelPackService,
                private _router : Router) { }

  ngOnInit(): void {

    this.orgId = this._home_hotel_service.OrganizationIdFromHome;
    this._hotelService.getAllHotelByOrganizationId(this.orgId).subscribe(
      data => {
        this.hotels= data;
      }
    )
  }

  checkPack( id : any){
    console.log(id);
    this._hotel_pack_service._hotelIdFromHotel=id;
    this._router.navigate(['/packs'])
    
  }

  search(){
    if(this.city ==""){
      this.ngOnInit();
    }
    else{
      this.hotels = this.hotels.filter(
        res => {
          return res.hotelCity.toLowerCase().match(this.city.toLowerCase());
        }
      )
    }
  }
}
