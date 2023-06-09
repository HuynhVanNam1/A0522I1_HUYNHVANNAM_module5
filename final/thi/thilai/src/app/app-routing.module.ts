import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStudentComponent} from './list-student/list-student.component';
import {DeleteStudentComponent} from './delete-student/delete-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {CreateStudentComponent} from "./create-student/create-student.component";


const routes: Routes = [
  {
    path: 'students/list',
    component: ListStudentComponent
  },
  {
    path: 'students/delete/:id',
    component: DeleteStudentComponent
  },
  {
    path: 'students/update/:id',
    component: UpdateStudentComponent
  },{
  path:'students/create',
    component: CreateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
