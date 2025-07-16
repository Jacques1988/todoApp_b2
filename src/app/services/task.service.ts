import { Injectable, signal,inject } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  todos = tasks
  tasks = signal<Task[]>(this.todos)

  constructor() { }



  getAllTasks(){
    return this.tasks
  }

 
  updateTask(updatedTask:Task){
    let taskIndex = this.todos.findIndex((todo) => todo.id === updatedTask.id)
    this.todos.splice(taskIndex, 1)
    this.todos.splice(taskIndex, 0, updatedTask)
  }


}
