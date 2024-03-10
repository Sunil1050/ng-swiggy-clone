import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  private modalService = inject(NgbModal);
  closeResult = '';

  constructor(private authService: AuthService) {}



  open(content: TemplateRef<any>) {
    this.modalService
      .open(content, { centered: true })
  }

  onLogout() {
    this.modalService.dismissAll();
    this.authService.logoutUser();
  }

  onCancel() {
    this.modalService.dismissAll('cancel');
  }
}
