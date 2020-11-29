import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/core/model/user/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  user: User = new User();
  userForm: FormGroup;
  hide = true;
  hideConfirm = true;
  temporario: boolean;
  isEdit: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService, 
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      emailConfirm: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(this.user.password, [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
    });

  }

  submitForm() {
    const user = this.userForm.value;
    user.id = this.user._id;
  }

  create(){
    const user = this.userForm.value;
    this.userService.createUser(user).subscribe(
      () => {
        this.router.navigate(['/usuarios']);
        this.openSnackBar('Usuário '+user.login+' criado com sucesso!');
      }, (err) => {
        console.log(err);
        this.openSnackBar('Desculpe! ocorreu um erro ao tentar criar o usuário!');
    });
  }

  openSnackBar(message: string, config?) {
    this.snackBar.open(message, 'fechar', {
      duration: 9000,
      panelClass: config
    });
  }

}
