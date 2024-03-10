class UserRating {
    constructor(
        public rating_text: string,
        public rating_color: string,
        public total_reviews: number,
        public rating: number
    ) {}
}

export class Restaurant {
    constructor(
        public has_online_delivery: boolean,
        public user_rating: UserRating,
        public id: string,
        public name: string,
        public has_table_booking: number,
        public is_delivering_now: number,
        public cost_for_two: number,
        public cuisine: string,
        public image_url: string,
        public menu_type: string,
        public location: string,
        public opens_at: string,
        public group_by_time: boolean
    ) {}
}