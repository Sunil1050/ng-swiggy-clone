import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList = [];
  finalPrice: number = 0;

  constructor(private router: Router, private cartListService: CartService) {}

  ngOnInit(): void {
    this.cartListService.cartListChanged.subscribe((cartList) => {
      this.cartList = cartList;
      this.finalPrice = this.cartListService.getFinalPrice();
    });
    this.cartList = this.cartListService.getCartItems();
    this.finalPrice = this.cartListService.getFinalPrice();
  }

  onOrderNow() {
    this.router.navigate(['/']);
  }

  onNavigateHome() {
    this.router.navigate(['/']);
  }

  onPlaceOrder() {
    this.router.navigate(['payment/success']);
  }
}
