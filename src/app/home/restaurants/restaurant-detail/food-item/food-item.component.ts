import { Component, OnInit , Input} from '@angular/core';
import { FoodItem } from './food-item.model';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() foodItem: FoodItem;
  isAdded: boolean = false;
  quantity: number = 0;

  constructor(private cartListService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.quantity = 1;
    this.isAdded = true;
    this.cartListService.addCartItem({...this.foodItem, quantity: this.quantity})
  }

  onDecrease() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
      this.cartListService.updateCartItem({...this.foodItem, quantity : this.quantity});

    }
    else {
      this.isAdded = false;
    }
  }

  onIncrease() {
    this.quantity = this.quantity + 1;
    this.cartListService.updateCartItem({...this.foodItem, quantity : this.quantity});
  }

}
