import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { School } from '../school';
import { Router } from '@angular/router'

@Component({
  selector: 'app-school-create',
  templateUrl: './school-create.component.html',
  styleUrls: ['./school-create.component.css'],
  providers:[SchoolsService]
})
export class SchoolCreateComponent implements OnInit {

  constructor(private schoolsService: SchoolsService, private router:Router) { }
  private _school;

  ngOnInit() {
    this._school = new School();
  }

  onSubmit(){
    this.schoolsService.createSchool(this._school).subscribe(school => {
      this.goSchools();
    });
  }

  goSchools(){
    this.router.navigate(['/schools']);
  }
}
