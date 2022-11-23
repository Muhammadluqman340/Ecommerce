import { Component } from '@angular/core';
import { SellService } from 'src/app/service/sell.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sell:SellService){}
    showLogin= false

  signUp(data:object):void{
  console.log(data);
  this.sell.sellersignup(data)

  }
  Login(data:object){
   console.log(data)
  }

  openLogin(){
  this.showLogin= true
  }
  openSignUp(){
    this.showLogin=false
  }
}
