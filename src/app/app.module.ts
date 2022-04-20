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
import { VhicleindexComponent } from './Admin/vhicle/vhicleindex/vhicleindex.component';
import { VhicleviewComponent } from './Admin/vhicle/vhicleview/vhicleview.component';
import { VhiclecreateComponent } from './Admin/vhicle/vhiclecreate/vhiclecreate.component';
import { VhicleeditComponent } from './Admin/vhicle/vhicleedit/vhicleedit.component';
import { TenderindexComponent } from './Admin/tender/tenderindex/tenderindex.component';
import { TendercreateComponent } from './Admin/tender/tendercreate/tendercreate.component';
import { TendereditComponent } from './Admin/tender/tenderedit/tenderedit.component';
import { TenderviewComponent } from './Admin/tender/tenderview/tenderview.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'VhicleType', component : ShowVhicleTypeComponent},
  {path : 'contractor', component : ShowContractorComponent},
  {path : 'contractorEntry', component : ContractorEntryComponent},
  {path : 'addContractor', component : AddContractorComponent},
  {path : 'login', component : LoginComponent},
  {path : 'adminHome', component : AdminHomeComponent},
  {path : 'vhicle/vhicleindex', component : VhicleindexComponent},
  {path : 'vhicle/:vtypeid/vhicleview', component : VhicleviewComponent},
  {path : 'vhicle/vhiclecreate', component : VhiclecreateComponent},
  {path : 'vhicle/:vtypeid/vhicleedit', component : VhicleeditComponent},
  {path : 'tender/tenderindex', component : TenderindexComponent},
  {path : 'tender/:tenderid/tenderview', component : TenderviewComponent},
  {path : 'tender/tendercreate', component : TendercreateComponent},
  {path : 'tender/:tenderid/tenderedit', component : TendereditComponent}
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
    AdminHomeComponent,
    VhicleindexComponent,
    VhicleviewComponent,
    VhiclecreateComponent,
    VhicleeditComponent,
    TenderindexComponent,
    TendercreateComponent,
    TendereditComponent,
    TenderviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
