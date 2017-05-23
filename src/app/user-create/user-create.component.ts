import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { UsersService } from '../users.service';
import {School} from '../school';
import {User} from '../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [SchoolsService, UsersService]
})
export class UserCreateComponent implements OnInit {

  constructor(private schoolsService: SchoolsService, private usersService: UsersService) { }
  private _schools;
  private _user;
  private _types = [
    {type:"TEACHER", name:"Profesor"},
    {type:"ADMIN", name:"Administrador"}
    ];

  ngOnInit() {
    this.getSchools();
    this._user = new User();
  }

  getSchools(){
    this.schoolsService.getAllSchools();
  }

  onSubmit(){
    this._user.active = true;
    this.usersService.createUser(this._user);
    
  }
}
