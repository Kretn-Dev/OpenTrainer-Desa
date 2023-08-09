import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HomeAdminPageComponent } from './pages/home-admin-page/home-admin-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    HomeAdminPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
