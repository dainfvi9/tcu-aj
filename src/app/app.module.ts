import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdToolbarModule, MdSidenavModule, MdButtonModule, MdCheckboxModule, MdInputModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    RouterModule.forRoot([
      {
        path:'',
        component: LoginComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
