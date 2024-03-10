import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  page: number = 1;
  pageSize: number = 9;
  collectionSize: number;
  constructor(private restaurantService: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurantService.restaurantsChaned.subscribe(({ collectionSize }) => {
      this.collectionSize = collectionSize;
    });
    this.collectionSize = this.restaurantService.getCollectionSize();
  }

  onPageChange() {
    const sortType = this.restaurantService.getSortType();

    this.restaurantService.setCurrentPage(this.page);
    this.restaurantService.paginatedRestaurants(this.page, this.pageSize, sortType);
  }

}
