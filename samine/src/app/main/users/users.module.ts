import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes.module';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms'
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [LoginComponent, ProfileComponent, DashboardComponent],
  imports: [
    CommonModule,
    RoutesModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UsersModule { }
