import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { ContractoreditComponent } from './Admin/contractor/contractoredit/contractoredit.component';
import { ContractorindexComponent } from './Admin/contractor/contractorindex/contractorindex.component';
import { ContractorviewComponent } from './Admin/contractor/contractorview/contractorview.component';
import { RcindexComponent } from './Admin/rc/rcindex/rcindex.component';
import { RccreateComponent } from './Admin/rc/rccreate/rccreate.component';
import { RcviewComponent } from './Admin/rc/rcview/rcview.component';
import { RceditComponent } from './Admin/rc/rcedit/rcedit.component';
import {AdminRoutingModule} from './Admin/admin-routing.module';
import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { TokenInterceptorService } from './services/token-interceptor.service';



const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
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
    TenderviewComponent,
    ContractoreditComponent,
    ContractorindexComponent,
    ContractorviewComponent,
    RcindexComponent,
    RccreateComponent,
    RcviewComponent,
    RceditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
