import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeAdminPageComponent } from './pages/home-admin-page/home-admin-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: 'home-admin', component: HomeAdminPageComponent},
      {path: 'list-clients', component: ListPageComponent},
      {path: '**', redirectTo: 'home-admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
