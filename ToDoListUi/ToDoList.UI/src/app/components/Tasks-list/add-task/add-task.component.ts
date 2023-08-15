import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Tasks } from 'src/app/models/TasksModel';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  addTaskReq:Tasks={
    id:0,
    description:'',
    date:new Date,
    completed:false
  }
  constructor(private taskService:TaskServiceService,private router:Router){}
  ngOnInit():void{

  }
  addTask()
  {
    
    this.taskService.addTask(this.addTaskReq)
    .subscribe({
      next:(addedTask)=>{
        this.router.navigate(['']);
      },
      error:(response)=>{
        console.log(response);
      }

    })
  }

}
