import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdToolbarModule, MdSidenavModule, MdButtonModule, 
  MdSelectModule, MdCheckboxModule, MdInputModule, MdListModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/toPromise';
import { StudentsComponent } from './students/students.component';
import { SchoolsComponent } from './schools/schools.component';
import { LoginComponent } from './login/login.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { SchoolsService } from './schools.service';
import { SchoolCreateComponent } from './school-create/school-create.component';
import { Observable } from 'rxjs/Observable';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SchoolsComponent,
    LoginComponent,
    UserCreateComponent,
    SchoolCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, 
    MdButtonModule, 
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdSelectModule,
    MdListModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'users/create',
        component: UserCreateComponent
      },
      {
        path:'',
        component: SchoolsComponent
      },
      {
        path:'schools/create',
        component: SchoolCreateComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
