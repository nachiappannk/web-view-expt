import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import {NarayanaHospitalComponent} from "./narayana-hospital/narayana-hospital.component";
import {FortisHospitalComponent} from "./fortis-hospital/fortis-hospital.component";
import {ManipalLoginComponent} from "./manipal-login/manipal-login.component";
import { ManipalHospitalComponent} from "./manipal-hospital/manipal-hospital.component"
import {FortisMoreInfoComponent} from "./fortis-more-info/fortis-more-info.component"

const routes: Routes = [
  { path:  "", pathMatch:  "full",redirectTo:  "home"},
  { path: "hospital", component: HospitalInfoComponent},
  { path: "narayana", component: NarayanaHospitalComponent},
  { path: "fortis", component: FortisHospitalComponent},
  { path: "manipalLogin", component: ManipalLoginComponent},
  { path: "manipal", component: ManipalHospitalComponent},
  { path: "fortis-info", component: FortisMoreInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
