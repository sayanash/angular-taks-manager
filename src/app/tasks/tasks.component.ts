import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  name = input.required<string>();
  @Input({ required: true }) userId!: string;

  public get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  tasks = [
    {
      taskId: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'gvaddgas',
      dueDate: '2024-10-25',
    },
    {
      taskId: 't2',
      userId: 'u2',
      title: 'Master JAVA',
      summary: 'gvaddgas',
      dueDate: '2024-10-27',
    },
    {
      taskId: 't3',
      userId: 'u3',
      title: 'Master React',
      summary: 'gvaddgas',
      dueDate: '2024-10-26',
    }
  ]
}
