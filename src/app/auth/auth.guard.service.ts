import { Injectable } from '@angular/core';
// import { AuthService } from './auth.services';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
