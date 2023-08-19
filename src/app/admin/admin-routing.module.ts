import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeAdminPageComponent } from './pages/home-admin-page/home-admin-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: 'home-admin', component: HomeAdminPageComponent},
      {path: 'users', component: UsersPageComponent},
      {path: 'teachers', component:TeachersPageComponent},
      {path: 'class', component: ClassPageComponent},
      {path: '**', redirectTo: 'home-admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
