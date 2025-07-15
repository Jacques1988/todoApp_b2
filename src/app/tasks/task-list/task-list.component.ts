import { Component, input, OnInit} from '@angular/core';
import { Task } from '../../models/task';
@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})


export class TaskListComponent {
  data = input.required<Task>()


  ngOnInit(){
    this.data()
  }
 
   toggleStatus(){
    
  }
 

}
