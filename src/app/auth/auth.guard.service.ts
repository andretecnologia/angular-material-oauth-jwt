import { Injectable } from '@angular/core';
// import { AuthService } from './auth.services';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // if (!this.auth.isAuthenticated()) {
    //   this.router.navigate(['/']);
    //   return false;
    // }
    return true;
  }
}
