import { Component, OnInit, Input } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  @Input() searchText: string;
  restaurants: Restaurant[] = [];
  isLoading: boolean = false;

  constructor(private restaurantService: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurantService.restaurantsChaned.subscribe(({ restaurants }) => {
      this.restaurants = restaurants;
    });

    this.isLoading = true;
    this.restaurantService.loadingChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    
    this.restaurantService.paginatedRestaurants(1, 9);
  }
}
