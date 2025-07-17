import { Component, ElementRef, viewChild, inject } from '@angular/core';
import { TaskListComponent } from '../tasks/task-list/task-list.component';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  taskService = inject(TaskService)
  taskInputReference = viewChild<ElementRef<HTMLInputElement>>("newTaskInput")


  addNewTask(){
    let newTaskValue = this.taskInputReference()!.nativeElement.value
    this.taskService.addNewTask(newTaskValue)
  }
}
