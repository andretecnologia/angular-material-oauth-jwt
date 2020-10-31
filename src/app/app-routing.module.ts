import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { AuthGuardService } from './auth/auth.guard.service'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FuncionariosHomeComponent } from './pages/funcionarios/funcionarios-home/funcionarios-home.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'funcionarios',
    component: FuncionariosHomeComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'usuarios',
    children: [
      { path: '', component: UsersListComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  


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
