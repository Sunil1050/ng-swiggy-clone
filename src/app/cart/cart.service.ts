import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: CartItem[] = [];
  cartListChanged = new Subject<CartItem[]>();

  constructor() {}

  getCartItems() {
    return this.cartList.slice();
  }

  getFinalPrice() {
    let price = 0;
    if (this.cartList && this.cartList.length > 0) {
      for (const  item of this.cartList) {
        price = price + (item.cost * item.quantity)
      }
      return price
    }
    return price;
  }

  addCartItem(cartItem: CartItem) {
    this.cartList.push(cartItem);
    this.cartListChanged.next(this.cartList.slice());
  }

  updateCartItem(cartItem: CartItem) {
    this.cartList = this.cartList.map((item) => {
      if (cartItem.id === item.id) {
        return cartItem;
      }
      return item;
    });
    console.log('Updated CartItemList: ', this.cartList);
    this.cartListChanged.next(this.cartList.slice());
  }

  emptyCartList() {
    this.cartList = [];
    this.cartListChanged.next(this.cartList.slice());
  }
}
