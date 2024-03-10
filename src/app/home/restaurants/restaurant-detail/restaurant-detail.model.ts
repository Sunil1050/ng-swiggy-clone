class FoodItem {
    constructor(
        public name: string,
        public cost: number,
        public food_type: string,
        public image_url: string,
        public id: string,
        public rating: number
    ) {}
}

export class RestaurantDetail {
    constructor(
        public rating: number,
        public id: string,
        public name: string,
        public cost_for_two: number,
        public cuisine: string,
        public image_url: string,
        public reviews_count: number,
        public opens_at: string,
        public location: string,
        public items_count: number,
        public food_items: FoodItem[]
    ) {}
}