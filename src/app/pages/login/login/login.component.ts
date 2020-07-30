import { Component, OnInit } from '@angular/core';
 import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  constructor(
    private authService : AuthService,
    private router: Router,
    private snackBar: MatSnackBar ) { }


  ngOnInit () {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value, (data) => {
      this.loginForm.reset();
      this.loginForm.markAsPristine();
      this.router.navigate(['home']);
    }, (error) => {
      this.loginForm.reset();
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key).setErrors(null) ;
      });
      this.snackBar.open(error, '', {
         duration: 2000,
      });
    });
  }

  openSnackBar(message: string, config) {
    this.snackBar.open(message, 'fechar', {
      duration: 9000,
      panelClass: ['style-error']
    });
  }

  // private configSucces: MatSnackBarConfig = {
  //   panelClass: ['style-succes'],
  // };

  // private configError: MatSnackBarConfig = {
  //   panelClass: ['style-error'],
  // };

}
