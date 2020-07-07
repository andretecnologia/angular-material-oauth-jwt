import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material';
// import { MatTabsModule }  from '@angular/material';
// import { MatButtonModule }  from '@angular/material';
// import { MatIconModule }   from '@angular/material';
// import { MatCardModule} from '@angular/material';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FuncionariosFormComponent } from './pages/funcionarios/funcionarios-form/funcionarios-form.component';
import { FuncionariosHomeComponent } from './pages/funcionarios/funcionarios-home/funcionarios-home.component';
import { FuncionariosListComponent } from './pages/funcionarios/funcionarios-list/funcionarios-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ResetComponent } from './pages/login/reset/reset.component';
import { ForgotComponent } from './pages/login/forgot/forgot.component';
import { AuthGuardService } from './auth/auth.guard.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FuncionariosFormComponent,
    FuncionariosHomeComponent,
    FuncionariosListComponent,
    HomeComponent,
    LoginComponent,
    ResetComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    // MatTabsModule,
    // MatButtonModule,
    // MatIconModule,
    // MatCardModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
