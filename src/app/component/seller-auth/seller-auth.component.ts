import { Component } from '@angular/core';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(){}
    showLogin= false

  signUp(data:object):void{
  console.log(data);
  // this.sell.sellersignup(data)

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
