import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(username: string, password: string) {
    return this.http
      .post<{ jwt_token: string }>(
        'https://apis.ccbp.in/login',
        JSON.stringify({ username, password })
      )
      .pipe(
        tap((resData) => {
          this.handleAuthentication(resData);
        })
      );
  }

  logoutUser() {
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  handleAuthentication(response: { jwt_token: string }) {
    if (response.hasOwnProperty('jwt_token')) {
      const loggedInUser = Object.assign({}, response);
      this.user.next(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    }
  }

  autoLogin() {
      const loadedUser = JSON.parse(localStorage.getItem('user'));
      if (!loadedUser) {
        return;
      }
      this.user.next(loadedUser);
  }
}
