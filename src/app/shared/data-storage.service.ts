import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../home/restaurants/restaurant.model';
import { RestaurantDetail } from '../home/restaurants/restaurant-detail/restaurant-detail.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  getListOffers() {
    return this.http.get('https://apis.ccbp.in/restaurants-list/offers');
  }

  getRestaurantsList(offset: number, LIMIT: number, sortType: string) {
    console.log(
      `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${sortType}`
    );
    return this.http.get<{ restaurants: Restaurant[]; total: number }>(
      `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${sortType}`
    );
  }

  getRestaurantDetails(restId: number) {
    return this.http.get<RestaurantDetail>(`https://apis.ccbp.in/restaurants-list/${restId}`);
  }
}
