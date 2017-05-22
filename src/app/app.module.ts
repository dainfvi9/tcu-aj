import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdToolbarModule, MdSidenavModule, MdButtonModule, 
  MdSelectModule, MdCheckboxModule, MdInputModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/toPromise';
import { StudentsComponent } from './students/students.component';
import { SchoolsComponent } from './schools/schools.component';
import { LoginComponent } from './login/login.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { SchoolsService } from './schools.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SchoolsComponent,
    LoginComponent,
    UserCreateComponent
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
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'',
        component: UserCreateComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
