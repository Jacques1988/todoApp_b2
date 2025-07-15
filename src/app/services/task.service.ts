import { Injectable, signal,inject } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<Task[]>(tasks)

  constructor() { }



  getAllTasks(){
    return this.tasks
  }

 


}
