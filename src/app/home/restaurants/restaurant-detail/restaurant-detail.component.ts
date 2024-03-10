import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { exhaustMap, take } from 'rxjs/operators';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RestaurantDetail } from './restaurant-detail.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
})
export class RestaurantDetailComponent implements OnInit {
  restaurantDetail: RestaurantDetail;
  isLoading: boolean = false;

  constructor(
    private currentRoute: ActivatedRoute,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.currentRoute.params
      .pipe(
        take(1),
        exhaustMap((params) => {
          return this.dataStorage.getRestaurantDetails(+params['id']);
        })
      )
      .subscribe((response) => {
        this.isLoading = false;
        this.restaurantDetail = response;
      });
  }
}
