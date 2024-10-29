import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from './task.model';


// interface task{
//   taskId: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  onCompleteTask(){
    this.complete.emit(this.task.taskId)
  }
@Input ({
  required:true
})task !:task

@Output()complete=new EventEmitter<string>();
}
