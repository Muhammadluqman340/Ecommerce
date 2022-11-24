import { Component } from '@angular/core';
import { SellService } from 'src/app/service/sell.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sell:SellService, private router:Router){}
    showLogin= false

  signUp(data:object) {
  console.log(data);
  // this.sell.sellersignup(data)
   this.sell.sellersignup(data).subscribe((result:any)=>{
    console.log(result);
    if(result){
      this.router.navigate(['/seller-home'])
    }
   })
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
