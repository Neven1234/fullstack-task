import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/Tasks-list/add-task/add-task.component';
import { TasksListComponent } from './components/Tasks-list/tasks-list/tasks-list.component';

const routes: Routes = [
  {
    path:'',
    component:TasksListComponent
  },
  {
    path:'add',
    component:AddTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
