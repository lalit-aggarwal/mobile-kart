import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Mobile Kart';
  user = new User;
  isLoginFailed: boolean = false;
  @Output() loginSuccessEvent: EventEmitter<User> = new EventEmitter<User>();
  constructor() { }

  submitLoginDetails():void{
    if(this.user.username === "admin" && this.user.password === "password")
    {
      this.user.isLoggedIn = true;
      this.loginSuccessEvent.emit(this.user);
    }
    else
    {
      this.isLoginFailed = true;
    }
  }

  resetLoginDetails(): void {
    this.user.username = "";
    this.user.password = "";
  }
}
