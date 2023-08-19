import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminPageComponent } from './pages/home-admin-page/home-admin-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    HomeAdminPageComponent,
    UsersPageComponent,
    TeachersPageComponent,
    ClassPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
