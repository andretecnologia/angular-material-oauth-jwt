import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { AuthGuardService } from './auth/auth.guard.service'


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }


  //   children: [
  //     { path: '', component: DashboardComponent },
  //     { path: 'dashboard', component: DashboardComponent },
  //     {
  //       path: 'usuarios',
  //       children: [
  //         { path: '', component: UserListPageComponent, canActivate: [PermissionGuardService], data: { permission: 'I_US' } },
  //         { path: 'novo', component: CreateUserPageComponent, canActivate: [PermissionGuardService], data: { permission: 'C_US' } },
  //         {
  //           path: 'editar/:userId',
  //           component: EditUserPageComponent,
  //           resolve: { user: UserResolverService },
  //           data: { permission: 'U_US' },
  //           canActivate: [PermissionGuardService]
  //         },
  //         {
  //           path: 'view/:userId',
  //           component: ViewUserPageComponent,
  //           resolve: { user: UserResolverService },
  //           data: { permission: 'S_US' },
  //           canActivate: [PermissionGuardService]
  //         }
  //       ]
  //     }
  // ]
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
