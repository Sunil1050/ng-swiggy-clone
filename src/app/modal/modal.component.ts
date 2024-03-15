import { Component, inject, TemplateRef, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/login/auth.service';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../cart/cart-item.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  private modalService = inject(NgbModal);
  @Input() modalType: string; //header
  @Input() cartItem: CartItem; //cartItem
  closeResult = '';

  constructor(private authService: AuthService, private cartService: CartService) {}

  open(content: TemplateRef<any>) {
    this.modalService
      .open(content, { centered: true })
  }

  onConfirm() {
    if (this.modalType === 'header') {
      this.onLogout();
    }
    else {
      const cartList = this.cartService.removeCartItem(this.cartItem)
      this.cartService.cartListChanged.next(cartList);
      this.modalService.dismissAll();
    }
  }

  onLogout() {
    this.modalService.dismissAll();
    this.authService.logoutUser();
  }

  onCancel() {
    this.modalService.dismissAll('cancel');
  }
}
