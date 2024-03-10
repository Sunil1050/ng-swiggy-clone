import { Injectable } from '@angular/core';
import { Subject, exhaustMap, take } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Restaurant } from './restaurant.model';
import { RestaurantDetail } from './restaurant-detail/restaurant-detail.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  restaurants: Restaurant[] = [];
  restaurantDetail: RestaurantDetail;
  collectionSize: number;
  isLoading: boolean = false;
  sortType: string = 'Lowest';
  currentPage: number = 1;

  restaurantsChaned = new Subject<{
    restaurants: Restaurant[];
    collectionSize: number;
  }>();
  restaurantDetailChange = new Subject<RestaurantDetail>();
  loadingChanged = new Subject<boolean>();
  currentPageChanged = new Subject<number>();

  constructor(private dataStorage: DataStorageService) {}

  getRestaurantList(): Restaurant[] {
    return this.restaurants.slice();
  }

  getCollectionSize(): number {
    return this.collectionSize;
  }
  
  setSortType(sortType: string) {
    this.sortType = sortType;
    this.paginatedRestaurants(this.currentPage, 9);
  }

  getSortType() {
    return this.sortType;
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getRestaurantDetail(restId: number) {
    this.dataStorage.getRestaurantDetails(restId)
      .subscribe((response) => {
        this.restaurantDetail = response;
        this.restaurantDetailChange.next(this.restaurantDetail)
      })
  }
  
  paginatedRestaurants(currentPage: number, pageSize: number, sortType=this.sortType) {
    const offset = (currentPage - 1) * pageSize;
    const limit = currentPage * pageSize;

    this.isLoading = true;
    this.loadingChanged.next(this.isLoading);

    this.dataStorage
      .getRestaurantsList(offset, limit, sortType)
      .subscribe(({ restaurants, total }) => {
        this.restaurants = restaurants;
        this.collectionSize = total;
        this.isLoading = false;

        this.restaurantsChaned.next({
          restaurants: this.restaurants.slice(),
          collectionSize: this.collectionSize,
        });
        this.loadingChanged.next(this.isLoading)
      });
  }
}
