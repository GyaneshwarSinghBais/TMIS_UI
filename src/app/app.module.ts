import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowContractorComponent } from './Contractor/show-contractor/show-contractor.component';
import { ShowVhicleTypeComponent } from './Contractor/show-vhicle-type/show-vhicle-type.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', component : AppComponent},
  {path : 'VhicleType', component : ShowVhicleTypeComponent},
  {path : 'contractor', component : ShowContractorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowContractorComponent,
    ShowVhicleTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
