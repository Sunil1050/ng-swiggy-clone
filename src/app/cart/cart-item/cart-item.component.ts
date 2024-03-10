import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  quantity: number;

  constructor(private cartListService: CartService) {}

  ngOnInit(): void {
    this.quantity = this.cartItem.quantity;
  }

  onDecrease() {
      this.quantity = this.quantity - 1;
      this.cartListService.updateCartItem({
        ...this.cartItem,
        quantity: this.quantity,
      });
  }

  onIncrease() {
    this.quantity = this.quantity + 1;
    this.cartListService.updateCartItem({
      ...this.cartItem,
      quantity: this.quantity,
    });
  }
}
