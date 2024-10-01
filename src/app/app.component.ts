import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  // template: 'Hello, {{title}}',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project'
  users=DUMMY_USERS
  selectedUser: any;
  onSelectUser(id:string){
    console.log("Selected user is "+id);
    const user = this.users.find(user => user.id === id);
    // this.selectedUser= user ? user.name:'';
    this.selectedUser= user
  }
}