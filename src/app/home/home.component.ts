import { Component, Input } from '@angular/core';
import { IMobile } from '../entity/Mobile';
import { User } from '../entity/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  header = 'Mobiles';
  selectedMobile: IMobile;
  _listFilterBy: string;
  filteredList: IMobile[];
  showMobileInformation: boolean = false;
  isHomePageShown: boolean = true;
  showCartDetails: boolean = false;
  @Input() loggedUser: User;

  constructor() {
    this.filteredList = this.mobiles;
    this._listFilterBy = "";
  }

  get listFilterBy(): string {
    return this._listFilterBy;
  }

  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.mobiles;
  }

  performFilter(filterBy: string): IMobile[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.mobiles.filter((mobile: IMobile) => mobile.devicename.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  viewMobileInformation(mobile: IMobile): void {
    this.selectedMobile = mobile;
    this.isHomePageShown = false;
    this.showMobileInformation = true;
  }

  addMobileToCart(mobile: IMobile): void {
    this.selectedMobile = mobile;
    this.isHomePageShown = false;
    this.showCartDetails = true;
  }

  showHomePage(showHomePage: boolean): void {
    this.isHomePageShown = showHomePage;
    this.showMobileInformation = !showHomePage;
    this.showCartDetails = !showHomePage;
  }

  mobiles: IMobile[] = [
    {
      "id": 1,
      "devicename": "Samsung Galaxy S9",
      "price": "100",
      "modelnumber": "SM-G965FZKDINS",
      "colors": "Black, Gold",
      "screensize": "5 Inch",
      "operatingsystem": "Android",
      "ram": 4,
      "storage": 128,
      "camera": "16px",
      "imageurl": "http://cdn1.knowyourmobile.com/sites/knowyourmobilecom/files/styles/gallery_wide/public/2017/04/galaxy-s8_intelligence_bixby.jpg?itok=zMIDIxBs",
      "quantity": 1
    },
    {
      "id": 2,
      "devicename": "Moto G5 Plus",
      "price": "450",
      "modelnumber": "XT 1686",
      "colors": "Lunar Gray, Fine Gold",
      "screensize": "5.5 Inch",
      "operatingsystem": "Android",
      "ram": 4,
      "storage": 32,
      "camera": "16px",
      "imageurl": "https://www.91-img.com/pictures/moto-g5-plus-mobile-phone-large-1.jpg",
      "quantity": 1
    },
    {
      "id": 3,
      "devicename": "VIVO V7+",
      "price": "550",
      "modelnumber": "V7+",
      "colors": "Black, Gray",
      "screensize": "5.8 Inch",
      "operatingsystem": "Android",
      "ram": 6,
      "storage": 64,
      "camera": "20px",
      "imageurl": "data:image/jpeg;base64,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",
      "quantity": 1
    },
    {
      "id": 4,
      "devicename": "Red MI 5A",
      "price": "230",
      "modelnumber": "XT 1686",
      "colors": "Gray, Fine Gold",
      "screensize": "5.2 Inch",
      "operatingsystem": "MIUI Android",
      "ram": 4,
      "storage": 16,
      "camera": "12px",
      "imageurl": "https://www.buymobile.com.bd/image/cache/catalog/xiaomi/note_5a_prime/Redmi-Note-5A-Primefi-800x800.jpg",
      "quantity": 1
    },
    {
      "id": 5,
      "devicename": "iPhone X",
      "price": "650",
      "modelnumber": "IP-2234GHRT",
      "colors": "Black, Gold",
      "screensize": "5.8 Inch",
      "operatingsystem": "iOS 11",
      "ram": 6,
      "storage": 256,
      "camera": "16px",
      "imageurl": "https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/silver/Apple-iPhoneX-Silver-1-3x.jpg",
      "quantity": 1
    }
  ];
}
