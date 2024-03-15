import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { DataStorageService } from '../shared/data-storage.service';
import { WindowRefService } from './window-ref.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList = [];
  finalPrice: number = 0;

  constructor(
    private router: Router,
    private cartListService: CartService,
    private dataStorage: DataStorageService,
    private winRef: WindowRefService
  ) {}

  ngOnInit(): void {
    this.cartListService.cartListChanged.subscribe((cartList) => {
      this.cartList = cartList;
      this.finalPrice = this.cartListService.getFinalPrice();
    });
    this.cartList = this.cartListService.getCartItems();
    this.finalPrice = this.cartListService.getFinalPrice();
  }

  onOrderNow() {
    this.router.navigate(['/']);
  }

  onNavigateHome() {
    this.router.navigate(['/']);
  }

  onPlaceOrder() {
    this.dataStorage.getOrderDetails(this.finalPrice).subscribe(
      ({ amount, currency, order_id }) => {
        const options = {
          key: environment.RAZORPAY_KEY,
          amount,
          currency,
          name: 'Sunil Test',
          callback_url: 'http://10.0.3.126:4200/',
          redirect: false,
          description: 'Test Transaction',
          image: 'https://example.com/your_logo',
          order_id,
          handler: (response: any) => {},
        };

        const rzp = new this.winRef.nativeWindow.Razorpay(options);
        rzp.on('payment.failed', (response: any) => {
          console.log('Payment failed:', response.error);
        });
        rzp.open();
        this.cartListService.emptyCartList();
      },
      (error) => {
        console.error('There was a problem with your fetch operation:', error);
      }
    );
  }
}
