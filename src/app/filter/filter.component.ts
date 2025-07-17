import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  taskService = inject(TaskService)


  constructor(){}


  getAllTasks(){
    this.taskService.getAllTasks()
  }

  filterCompletedTasks(){
    this.taskService.filterCompleted()
  }

  filterIncompletedTasks(){
    this.taskService.filterIncomplete()
  }
}
