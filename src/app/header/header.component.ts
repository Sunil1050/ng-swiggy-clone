import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartList = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartListChanged
      .subscribe((cartList) => {
        this.cartList = cartList;;
      })
    this.cartList = this.cartService.getCartItems();
  }
}
