import { Component, computed, EventEmitter, Input, input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
interface User{
  id:string,
  name:string,
  avatar:string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required:true}) id !: string;
  // @Input({required:true}) name !: string;
  // @Input({required:true}) avatar !: string;

  // id=input.required<string>()
  // name=input.required<string>()
  // avatar=input.required<string>()
  // @Input({required:true}) user !: {
  //   id:string,
  //   name:string,
  //   avatar:string
  // }
  @Input ({required:true}) user !: User
  // @Output() select =new EventEmitter<string>()
  select= output<string>()

  onSelectUser() {
    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
    // this.selectedUser= DUMMY_USERS[randomIndex]
    this.select.emit(this.user.id);
  }

  // selectedUser = DUMMY_USERS[randomIndex];
  imagePath=computed(()=>'/users/'+this.user.avatar)
  // imagePath=computed(()=>'/users/'+this.avatar())
  // get imagePath() {
  //   // return '/users/'+this.avatar; //+ this.selectedUser.avatar;
  //   return '/users/'+this.avatar()
  // }
}
