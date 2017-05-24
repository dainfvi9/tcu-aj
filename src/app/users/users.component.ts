import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {User} from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  private _users;
  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe(
      schools => this._users = schools,
      error => console.log(error)
    );
  }

}
