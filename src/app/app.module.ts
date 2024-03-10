import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthInterceptorService } from './login/auth-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './header/modal/modal.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { RestaurantsComponent } from './home/restaurants/restaurants.component';
import { RestaurantItemComponent } from './home/restaurants/restaurant-item/restaurant-item.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './home/pagination/pagination.component';
import { RestaurantDetailComponent } from './home/restaurants/restaurant-detail/restaurant-detail.component';
import { FoodItemComponent } from './home/restaurants/restaurant-detail/food-item/food-item.component';
import { LoaderComponent } from './loader/loader.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { PaymentComponent } from './payment/payment.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ModalComponent,
    CarouselComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    FooterComponent,
    PaginationComponent,
    RestaurantDetailComponent,
    FoodItemComponent,
    LoaderComponent,
    CartComponent,
    CartItemComponent,
    PaymentComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbPopoverModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
