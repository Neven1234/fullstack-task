import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Tasks } from 'src/app/models/TasksModel';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  
  tasks:Tasks[]=[];
  //test
  changeTaskReq:Tasks={
    id:0,
    description:'',
    date:new Date(),
    completed:false
  }
  iscleaced:boolean=false;
  constructor(private tasksServices:TaskServiceService){}

  ngOnInit():void{
    this.tasksServices.getAllTasks()
    .subscribe({
      next:(tasksLe)=>{
        this.tasks=tasksLe;
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }
  findeTask(id:number){
    this.iscleaced=true
    var taskaya=this.tasks.find((theTask)=>{return theTask.id==id})
    this.tasksServices.getTask(id).subscribe({
      next:(res)=>{
        this.updateCheckBox(res)
        this.changeTaskReq=res
        console.log(res.description+res.completed)
      }
    })
    
  }
  updateCheckBox(obj:Tasks){
    if(this.iscleaced){
      if(obj.completed==true)
      {
        obj.completed=false
      }
      else{
        obj.completed=true
      }
      this.iscleaced=false
    }
   
    console.log('kemet flag ',this.iscleaced)
    this.tasksServices.updateTask(obj,obj.id).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })


  }

}
