import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material';
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
  constructor(private authService : AuthService, private router: Router) { }


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
      this.router.navigate(['home']);
    }, (error) => {
      // this.snackBar.open(error, '', {
      //   duration: 2000,
      // });
    });
  }


}
