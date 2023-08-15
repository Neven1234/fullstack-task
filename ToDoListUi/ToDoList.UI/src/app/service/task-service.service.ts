import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../models/TasksModel';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  baseApiUrl:string='https://localhost:7238'
  constructor(private http: HttpClient) { }
  getAllTasks():Observable<Tasks[]>{
    return this.http.get<Tasks[]>(this.baseApiUrl +'/api/ToDoList')
  }

  addTask(addTaskRequest:Tasks):Observable<Tasks>{
    addTaskRequest.id=0;
    return this.http.post<Tasks>(this.baseApiUrl +'/api/ToDoList',addTaskRequest);
  }
  getTask(id:number):Observable<Tasks>{
    return this.http.get<Tasks>(this.baseApiUrl+'/api/ToDoList/'+id);
  }
  updateTask(apdatedReq:Tasks,id:number):Observable<Tasks>{
    return this.http.put<Tasks>(this.baseApiUrl+'/api/ToDoList/'+id,apdatedReq);
  }
}
