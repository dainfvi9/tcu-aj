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
import { LoginComponent } from '../login/login.component';
import { UserCreateComponent } from '../users/create/user-create.component';
import 'rxjs/add/operator/toPromise';


@NgModule({
  declarations: [
    AppComponent,
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
