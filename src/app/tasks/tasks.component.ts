import { Component, inject } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = inject(TaskService).getAllTasks()



}
