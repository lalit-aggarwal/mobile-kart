import { Component } from '@angular/core';
import { User } from './entity/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Mobile Kart";
  showLogin: boolean = false;
  user = new User;

  onClickLoginButton(): void {
    this.showLogin = true;
  }

  onSuccessLogin(user: User): void {
    if (user.isLoggedIn) {
      this.user = user;
      this.showLogin = false;
    }
  }

  onLoggedOut():void{
    this.user.isLoggedIn = false;
    this.showLogin = true;
  }
}
