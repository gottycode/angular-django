import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
      console.log(this.users);
    })
  }
  // get users() {
  //   let user1 = new User('foo');
  //   let user2 = new User('bar', 'John', 'Doe', 'foo@example.com');
  //   return [user1, user2]
  // }

}
