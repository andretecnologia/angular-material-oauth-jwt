import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public first: string;
  public isMenuOpen: boolean = false;


  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public authService : AuthService
  ) {

  }


  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }

  logout() {
    return;
  }

  expansion(lista = []) {
    let saida = false;
    lista.forEach(element => {
      saida = saida || element;
    });

    return saida;
  }

}
