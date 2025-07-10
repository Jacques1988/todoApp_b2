import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoApp';
}
