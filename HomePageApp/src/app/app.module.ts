import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { NarayanaHospitalComponent } from './narayana-hospital/narayana-hospital.component';
import { FortisHospitalComponent } from './fortis-hospital/fortis-hospital.component';
import { ManipalLoginComponent } from './manipal-login/manipal-login.component';
import { ManipalHospitalComponent } from './manipal-hospital/manipal-hospital.component';
import { FortisMoreInfoComponent } from './fortis-more-info/fortis-more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalInfoComponent,
    NarayanaHospitalComponent,
    FortisHospitalComponent,
    ManipalLoginComponent,
    ManipalHospitalComponent,
    FortisMoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
