import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: 'admin' | 'user' = 'user';

  constructor(private router: Router) {}

  login(userName: string, password: string): boolean {
    if (userName === 'admin' && password === 'admin') {
      (this.isAuthenticated = true),
        (this.userRole = 'admin'),
        this.router.navigate(['/admin']);
    } else if (userName === 'user' && password === 'user') {
      (this.isAuthenticated = true),
        (this.userRole = 'user'),
        this.router.navigate(['/user']);
      return true;
    }
    return false;
  }

  logout() {
    (this.isAuthenticated = false), this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  gerRole(): 'admin' | 'user' {
    return this.userRole;
  }
}
