import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

export const routes: Routes = [{path:"userlogin",component:UserLoginComponent},
  {path:'Booking',component:BookingPageComponent},
  {path:'bookingdetails',component:BookingDetailsComponent},
  {path:"forget_password",component:ForgetPasswordComponent},
  {path:'',component:UserLoginComponent},
];
