import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
// import LoginImg from '../../assets/IMG/LoginImg.png';
// import LoginImgMob from '../../assets/IMG/LoginImgMob.png';
// import AppLogo from '../../assets/IMG/AppLogo.png';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(formData: NgForm) {
    console.log('FOrm Submitted !', formData);
    const { username, password } = formData.value;
    this.authService.loginUser(username, password).subscribe((res) => {
      console.log('API response: ', res, typeof res);
      this.router.navigate([''])
    });
  }
}
