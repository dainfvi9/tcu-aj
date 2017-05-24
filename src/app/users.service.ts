import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private userURL = 'http://192.168.5.12:9841/api/user';

  constructor(private http: Http) { }

  getAllUsers() {
    return this.http
      .get(this.userURL)
      .map(response => response.json() as User[])
      .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

  createUser(_user){
    let bodyString = JSON.stringify(_user);
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers:headers});

    return this.http
      .post(this.userURL+"/create",bodyString,options)
      .map((response:Response) => response.json() as User)
      .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

}
