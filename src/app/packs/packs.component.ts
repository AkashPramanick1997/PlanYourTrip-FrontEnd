import { LoginUserPackService } from './../login-user-pack.service';
import { Router } from '@angular/router';
import { LoginPacksService } from './../login-packs.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pack } from '../pack';
import { HotelPackService } from '../hotel-pack.service';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {

  packs : Pack[] =[];
  _hotel_id : Number =0;
  _Pack_id : number | undefined;
  constructor(  public login_packService : LoginPacksService,
                private _hotel_pack_service : HotelPackService,
                private _pack_service : PackService , 
                private _router : Router,
                private _login_user_service : LoginUserPackService) { }

  ngOnInit(): void {
    this._hotel_id= this._hotel_pack_service._hotelIdFromHotel;
    this._pack_service.getAllPackByHotelId(this._hotel_id).subscribe(
      data => {
        this.packs = data;
      }
    )
  }

  onPackDetails( id : any){
    this._Pack_id = id;
    console.log(id);
    this._login_user_service._pack_id=id;
    this._router.navigate(['/user-pack'])
  }
  

}
