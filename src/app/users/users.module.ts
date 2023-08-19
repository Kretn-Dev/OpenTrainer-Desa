import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersLayoutComponent } from './layout/users-layout/users-layout.component';
import { HomeUsersPageComponent } from './pages/home-users-page/home-users-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { TimetablePageComponent } from './pages/timetable-page/timetable-page.component';


@NgModule({
  declarations: [
    UsersLayoutComponent,
    HomeUsersPageComponent,
    ClassPageComponent,
    TimetablePageComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
