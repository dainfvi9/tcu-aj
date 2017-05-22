import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SchoolService {
    private schoolURL = 'localhost:9481/api/school';

    constructor(private http: Http) { }

    getAllSchools() {
        return this.http.get(this.schoolURL)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getSchoolById(id:String) {
        return this.http.get(this.schoolURL+"/"+id)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error): Promise<any> {
        console.error('ERROR:', error);
        return Promise.reject(error.message || error);
    }
}