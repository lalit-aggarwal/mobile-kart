import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewmobileinformationComponent } from './viewmobileinformation/viewmobileinformation.component';
import { HomeComponent } from './home/home.component';
import { StorageUnitPipe } from './shared/storage-unit.pipe';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewmobileinformationComponent,
    HomeComponent,
    StorageUnitPipe,
    CartdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
