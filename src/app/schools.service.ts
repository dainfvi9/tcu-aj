import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { School } from './school';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class SchoolsService {
  private schoolURL = 'http://192.168.5.12:9841/api/school';

  constructor(private http: Http) { }

  getAllSchools(): Observable<School[]> {
    return this.http
      .get(this.schoolURL)
      .map(response => response.json() as School[])
      .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

  createSchool(_school:School){
    let bodyString = JSON.stringify(_school);
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers:headers});

    return this.http
      .post(this.schoolURL+"/create",bodyString,options)
      .map((response:Response) => response.json() as School)
      .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }
  
  /*getAllSchools() {
    return this.http.get(this.schoolURL)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getSchoolById(id: String) {
    return this.http.get(this.schoolURL + "/" + id)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }


  createSchool(_school){
    return this.http
      .post(this.schoolURL+"/create",_school)
      .toPromise()
      .then(response => response.json() as School)
      .catch(this.handleError);
  }*/

  private handleError(error): Promise<any> {
    console.error('ERROR:', error);
    return Promise.reject(error.message || error);
  }

}
