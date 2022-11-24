import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { E404ErorrComponent } from './component/e404-erorr/e404-erorr.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    E404ErorrComponent,
    SellerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
