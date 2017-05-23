import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import {School} from '../school';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
  providers: [SchoolsService]
})
export class SchoolsComponent implements OnInit {
  
  private _schools;
  constructor(private schoolsService: SchoolsService) { }

  ngOnInit() {
    this.getSchools();
  }

  getSchools() {
    this.schoolsService.getAllSchools().subscribe(
      schools => this._schools = schools,
      error => console.log(error)
    );
  }

}
