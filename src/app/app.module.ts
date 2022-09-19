import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateDoctorComponent,
    ShowDoctorComponent,
    CreatePatientComponent,
    ShowPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
