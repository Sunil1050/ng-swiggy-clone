import { FoodItem } from "../home/restaurants/restaurant-detail/food-item/food-item.model";

export class CartItem extends FoodItem {
    constructor(
      name: string,
      cost: number,
      food_type: string,
      image_url: string,
      id: string,
      rating: number,
      public quantity: number
    ) {
      super(name, cost, food_type, image_url, id, rating);
    }
  }