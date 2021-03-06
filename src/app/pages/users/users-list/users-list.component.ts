//import { MatDialog, PageEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
//import { RemoveDialogComponent } from 'src/app/shared/components/remove-dialog/remove-dialog.component';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user/user';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/core/service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from 'src/app/auth/auth.services';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'name', 'email'];
  data = new MatTableDataSource([]);
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  rerender = false;
  filter = false;
  title = "Listagem de usuários";
  @ViewChild(MatPaginator) paginator: MatPaginator;
   constructor(
    private router: Router,
    private dialog: MatDialog,
      private authService : AuthService,
      private snackBar: MatSnackBar,
      private userService: UserService,
      private rf: ChangeDetectorRef
   ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUserList().subscribe((res) => {
      this.data.data = res;
      this.data.paginator = this.paginator;
      this.rerender = true;
      this.rf.detectChanges();
      this.rerender = false;
      this.isLoadingResults = false;
    });
  }

    redirectEdit(user: User) {
      this.router.navigate(['/usuarios/editar', user._id]);
    }

    redirectView(user: User) {
      // this.router.navigate(['/home/usuarios/view/', user.id]);
    }

    openDialogRemove(user): void {
      // const dialogRef = this.dialog.open(RemoveDialogComponent, {
      //   height: '300px',
      //   width: '400px',
      //   data: {
      //     title: 'Remover usuário '+ user.firstName,
      //     mensagem: 'Tem certeza que deseja remover esse usuário?'
      //   }
      // });

      // dialogRef.afterClosed().subscribe(result => {
      //   if (result) {
      //     this.userService.removeUser(user.id).subscribe(
      //       res => {
      //         this.getUsers();
      //       },
      //       err => {}
      //     );
      //   }
      // });
    }

    applyFilter(filterValue: string) {

      // if(!filterValue.trim()){
      //   this.filter = false;
      //   this.getUsers();
      // }else{
      //   this.filter = true;
      //   this.userService.filterUser(filterValue.trim().toLowerCase()).subscribe(res=>{
      //     this.data.data = res;
      //   })
      // }
    }

    // async doRerender() {
    //   this.rerender = true;
    //   this.rf.detectChanges();
    //   this.rerender = false;
    // }

    openSnackBar(message: string, config) {
      this.snackBar.open(message, 'fechar', {
        duration: 9000,
        panelClass: config
      });
    }
}
