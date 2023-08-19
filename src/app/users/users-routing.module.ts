import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from './layout/users-layout/users-layout.component';
import { HomeUsersPageComponent } from './pages/home-users-page/home-users-page.component';
import { TimetablePageComponent } from './pages/timetable-page/timetable-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersLayoutComponent,
    children: [
      {path: 'home-users', component: HomeUsersPageComponent},
      {path: 'timetable', component: TimetablePageComponent},
      {path: 'class', component: ClassPageComponent},
      {path: '**', redirectTo: 'home-users'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
