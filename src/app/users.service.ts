import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UsersService {

  private userURL = 'http://192.168.5.12:9841/api/user';

  constructor(private http: Http) { }

  getAllUser() {
    return this.http
      .get(this.userURL)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  createUser(_user){
    return this.http
      .post(this.userURL+"/create",_user)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error): Promise<any> {
    console.error('ERROR:', error);
    return Promise.reject(error.message || error);
  }

}
