import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  title='';
  summary='';
  dueDate='';
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    });
  }
}


export { NewTaskData };
// export interface NewTaskData {
//   title: string;
//   summary: string;
//   dueDate: string;
// }

