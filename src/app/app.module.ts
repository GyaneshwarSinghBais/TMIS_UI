import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowContractorComponent } from './Contractor/show-contractor/show-contractor.component';
import { ShowVhicleTypeComponent } from './Contractor/show-vhicle-type/show-vhicle-type.component';

import { Routes, RouterModule } from '@angular/router';
import { ContractorEntryComponent } from './Admin/contractor-entry/contractor-entry.component';
import { AddContractorComponent } from './Admin/add-contractor/add-contractor.component';

const routes: Routes = [
  {path : '', component : AppComponent},
  {path : 'VhicleType', component : ShowVhicleTypeComponent},
  {path : 'contractor', component : ShowContractorComponent},
  {path : 'contractorEntry', component : ContractorEntryComponent},
  {path : 'addContractor', component : AddContractorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowContractorComponent,
    ShowVhicleTypeComponent,
    ContractorEntryComponent,
    AddContractorComponent
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
