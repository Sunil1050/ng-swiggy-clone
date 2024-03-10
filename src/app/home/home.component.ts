import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RestaurantsService } from './restaurants/restaurants.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  carouselApi: any = {};
  isLoading: boolean = false;
  sortType: string = 'Lowest'
  searchText: string = '';

  constructor(private dataStorage: DataStorageService, private restaurantService: RestaurantsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.dataStorage.getListOffers().subscribe((res) => {
      this.isLoading = false;
      this.carouselApi = res;
    });
  }

  onClickLowest() {
    this.sortType = 'Lowest'
    this.restaurantService.setSortType(this.sortType);
  };

  onClickHighest() {
    this.sortType = 'Highest';
    this.restaurantService.setSortType(this.sortType);
  };
}
