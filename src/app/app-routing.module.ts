import { DummyComponent } from './dummy/dummy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PacksComponent } from './packs/packs.component';
import { HotelComponent } from './hotel/hotel.component';
import { UserPackComponent } from './user-pack/user-pack.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'home' , component : HomeComponent},
  { path : 'registration' , component : RegistrationComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'aboutus', component : AboutUsComponent},
  { path : 'contactus' , component : ContactUsComponent},
  { path : 'packs' , component : PacksComponent},
  { path : 'hotels' , component : HotelComponent},
  { path : 'user-pack' , component : UserPackComponent,
            canActivate : [AuthGuard]},
  { path : 'bookings' , component : BookingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
