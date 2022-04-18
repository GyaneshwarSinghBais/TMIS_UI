import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { NavbarComponent } from './navbar/navbar.component';
import { ShowContractorComponent } from './Contractor/show-contractor/show-contractor.component';
import { ShowVhicleTypeComponent } from './Contractor/show-vhicle-type/show-vhicle-type.component';

import { Routes, RouterModule } from '@angular/router';
import { ContractorEntryComponent } from './Admin/contractor-entry/contractor-entry.component';
import { AddContractorComponent } from './Admin/add-contractor/add-contractor.component';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './Admin/navbar-admin/navbar-admin.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'VhicleType', component : ShowVhicleTypeComponent},
  {path : 'contractor', component : ShowContractorComponent},
  {path : 'contractorEntry', component : ContractorEntryComponent},
  {path : 'addContractor', component : AddContractorComponent},
  {path : 'login', component : LoginComponent},
  {path : 'adminHome', component : AdminHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    //NavbarComponent,
    ShowContractorComponent,
    ShowVhicleTypeComponent,
    ContractorEntryComponent,
    AddContractorComponent,
    LoginComponent,
    NavbarAdminComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
