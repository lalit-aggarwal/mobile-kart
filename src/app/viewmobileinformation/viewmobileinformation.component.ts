import { Component } from '@angular/core';
import { IMobile } from '../entity/Mobile';
import { Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-viewmobileinformation',
  templateUrl: './viewmobileinformation.component.html',
  styleUrls: ['./viewmobileinformation.component.css']
})
export class ViewmobileinformationComponent {
  showMobileInformation: boolean = true;
  showCartDetails: boolean = false;
  @Input() mobile: IMobile;
  @Input() user: User;
  @Output() homePageEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  goToHomePage(): void {
    this.homePageEvent.emit(true);
  }

  showCart(): void {
    this.showMobileInformation = false;
    this.showCartDetails = true;
  }

  showMobileInfo(showMobileInformation:boolean): void {
    this.showMobileInformation = showMobileInformation;
    this.showCartDetails = !showMobileInformation;
  }

  ngOnChanges(): void {

  }
}