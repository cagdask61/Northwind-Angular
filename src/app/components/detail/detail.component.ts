import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  cartItems:CartItem[]=[]
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCartList();
  }

   getCartList(){
    this.cartItems = this.cartService.list();
  }
}
