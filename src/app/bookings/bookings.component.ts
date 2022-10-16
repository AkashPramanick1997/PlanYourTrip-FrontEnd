import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { UserPack } from '../user-pack';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  _userPacks : any;
  session : any;
  

  constructor( private _bboking_service : BookingsService) { }


  ngOnInit(): void {

    let data : any = localStorage.getItem('token');
    this.session = JSON.parse(data);

    this._bboking_service.getAllBookingByUserId(this.session.userId).subscribe(
      data => {
        this._userPacks = data;
        console.log(data)
      }
    )
    }
}
