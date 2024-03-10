import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.guard';
import { RestaurantDetailComponent } from './home/restaurants/restaurant-detail/restaurant-detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'restaurants-list/:id',
    component: RestaurantDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart-list',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment/success',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
