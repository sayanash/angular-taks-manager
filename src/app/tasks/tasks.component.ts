import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent, NewTaskData } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddTask=false;
onTaskComplete(id:string){
  this.tasks = this.tasks.filter(task => task.taskId !== id);
}
onAddTask(newTask: NewTaskData){
this.tasks.unshift({
  taskId: 't'+(this.tasks.length+1),
  userId: this.userId,
  title: newTask.title,
  summary: newTask.summary,
  dueDate: newTask.dueDate
})  
}

onStartAddTask(){
  this.isAddTask = true;
}
onCancelAddTask(){
  this.isAddTask = false;
}
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
      summary: 'for frontend',
      dueDate: '2024-10-25',
    },
    {
      taskId: 't7',
      userId: 'u1',
      title: 'Master JAVA',
      summary: 'For backend',
      dueDate: '2024-10-27',
    },
    {
      taskId: 't2',
      userId: 'u2',
      title: 'Master JAVA',
      summary: 'For backend',
      dueDate: '2024-10-27',
    },
    {
      taskId: 't3',
      userId: 'u3',
      title: 'Master Spring',
      summary: 'for stable backend',
      dueDate: '2024-10-26',
    },
    {
      taskId: 't4',
      userId: 'u4',
      title: 'Win against NZ in Bangaluru test',
      summary: 'for being stable in WTC',
      dueDate: '2024-10-27',
    },
    {
      taskId: 't5',
      userId: 'u5',
      title: 'Singing',
      summary: 'Nothing',
      dueDate: '2024-10-26',
    },
    {
      taskId: 't6',
      userId: 'u6',
      title: 'Do not choke in Bangaluru test',
      summary: 'Best of luck',
      dueDate: '2024-10-24',
    }
  ]
}
