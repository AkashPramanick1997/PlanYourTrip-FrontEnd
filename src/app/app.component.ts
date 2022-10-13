import { RegistrationService } from './registration.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlanYourTrip';
  constructor(private _registrationService : RegistrationService){
    
  }
}
