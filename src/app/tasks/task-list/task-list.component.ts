import { Component, input, output} from '@angular/core';
import { Task } from '../../models/task';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-task-list',
  imports: [NgClass],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})


export class TaskListComponent {
  data = input.required<Task>()
  updateTaskEvent = output()
 
   toggleStatus(){
    this.data().checked = !this.data().checked
    this.data().checked ? this.data().status = "complete" : this.data().status ="incomplete"
    this.updateStatus()
  }
 

  updateStatus(){
    this.updateTaskEvent.emit()
  }

}
