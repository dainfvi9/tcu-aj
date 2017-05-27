import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdToolbarModule, MdSidenavModule, MdButtonModule, 
  MdSelectModule, MdCheckboxModule, MdInputModule, MdListModule, MdIconModule,
  MdGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
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
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
import { DataService } from './data.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SchoolsComponent,
    LoginComponent,
    UserCreateComponent,
    SchoolCreateComponent,
    UsersComponent,
    MainComponent,
    UserDetailComponent,
    SchoolDetailComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
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
    MdIconModule,
    MdGridListModule,
    RouterModule.forRoot([
      {
        path:'',
        component: MainComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'users/create',
        component: UserCreateComponent
      },
      {
        path:'schools',
        component: SchoolsComponent
      },
      {
        path:'schools/create',
        component: SchoolCreateComponent
      },
      {
        path:'users',
        component: UsersComponent
      },
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
