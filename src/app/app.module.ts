import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './modules/navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    NavbarModule,
    BrowserAnimationsModule,
    RegisterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
