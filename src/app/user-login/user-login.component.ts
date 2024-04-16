import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Form,FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent { constructor(private Titleserice:Title,private router: Router){
  this.Titleserice.setTitle('Movie_login')
}
emails=''
pass=''


submitForm(form: any): void {

if(form.valid){
  console.log(form.value);
  alert('your Response has been recorded')
  form.resetForm();
  this.router.navigate(['/Booking'])
}else{
  alert('Please Enter Valid Details')
 
}

}

}
