import { IMobile } from '../entity/Mobile';
import { Input, OnChanges, EventEmitter, Component, Output, OnInit } from '@angular/core';
import { User } from '../entity/User';
import { getRandomString } from 'selenium-webdriver/safari';

var cartMobiles = new Array<IMobile>();

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  _quantity: number;
  total: number = 0;
  @Input() mobile: IMobile;
  @Output() homePageEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() viewMobilePageEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  addedMobiles = new Array<IMobile>();
  @Input() user: User;

  constructor() {
  }

  goToHomePage(): void {
    this.homePageEvent.emit(true);
    this.viewMobilePageEvent.emit(true);
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
    this.calculateTotalPrice();
  }

  ngOnChanges(): void {
  }

  ngOnInit() {
    var mobile = cartMobiles.find(m => m.id == this.mobile.id);
    if (mobile) {
      cartMobiles = cartMobiles.filter(cartMobile => cartMobile != mobile);
      mobile.quantity++;
      cartMobiles.push(mobile);
    }
    else {
      cartMobiles.push(this.mobile);
    }

    this.addedMobiles = cartMobiles;
    this.quantity = this.mobile.quantity;
  }

  placeOrder(): void {
    this.calculateTotalPrice();
    if (this.user.isLoggedIn) {
      alert("Your order has been placed with order value: $" + this.total + ".00. Order ID: " + this.makeRandomID());
      this.homePageEvent.emit(true);
      this.viewMobilePageEvent.emit(true);
    }
    else {
      alert("You must be logged in to place the order.");
    }
  }

  makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  removeMobileFromCart(mobile: IMobile): void {
    cartMobiles = cartMobiles.filter(cartMobile => cartMobile != mobile);
    this.addedMobiles = cartMobiles;
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.total = 0;
    this.addedMobiles.forEach(m => {
      this.total += +m.price * m.quantity
    });
  }
}
