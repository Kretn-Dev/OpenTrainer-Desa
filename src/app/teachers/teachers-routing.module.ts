import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherLayoutComponent } from './layout/teacher-layout/teacher-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';


const routes: Routes = [
  {
    path: '',
    component: TeacherLayoutComponent,
    children: [
      {path: 'alumnos', component: UsersPageComponent},
      {path: '**', redirectTo: 'alumnos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
