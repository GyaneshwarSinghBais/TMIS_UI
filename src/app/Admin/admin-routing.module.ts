import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowContractorComponent } from '../Contractor/show-contractor/show-contractor.component';
import { ShowVhicleTypeComponent } from '../Contractor/show-vhicle-type/show-vhicle-type.component';
import { AddContractorComponent } from './add-contractor/add-contractor.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ContractorEntryComponent } from './contractor-entry/contractor-entry.component';
import { ContractoreditComponent } from './contractor/contractoredit/contractoredit.component';
import { ContractorindexComponent } from './contractor/contractorindex/contractorindex.component';
import { ContractorviewComponent } from './contractor/contractorview/contractorview.component';
import { RccreateComponent } from './rc/rccreate/rccreate.component';
import { RceditComponent } from './rc/rcedit/rcedit.component';
import { RcindexComponent } from './rc/rcindex/rcindex.component';
import { RcviewComponent } from './rc/rcview/rcview.component';
import { TendercreateComponent } from './tender/tendercreate/tendercreate.component';
import { TendereditComponent } from './tender/tenderedit/tenderedit.component';
import { TenderindexComponent } from './tender/tenderindex/tenderindex.component';
import { TenderviewComponent } from './tender/tenderview/tenderview.component';
import { VhiclecreateComponent } from './vhicle/vhiclecreate/vhiclecreate.component';
import { VhicleeditComponent } from './vhicle/vhicleedit/vhicleedit.component';
import { VhicleindexComponent } from './vhicle/vhicleindex/vhicleindex.component';
import { VhicleviewComponent } from './vhicle/vhicleview/vhicleview.component';

const routes: Routes = [
  {path : 'VhicleType', component : ShowVhicleTypeComponent},
  {path : 'contractor', component : ShowContractorComponent},
  {path : 'contractorEntry', component : ContractorEntryComponent},
  {path : 'addContractor', component : AddContractorComponent},
  {path : 'adminHome', component : AdminHomeComponent},
  {path : 'vhicle/vhicleindex', component : VhicleindexComponent},
  {path : 'vhicle/:vtypeid/vhicleview', component : VhicleviewComponent},
  {path : 'vhicle/vhiclecreate', component : VhiclecreateComponent},
  {path : 'vhicle/:vtypeid/vhicleedit', component : VhicleeditComponent},
  {path : 'tender/tenderindex', component : TenderindexComponent},
  {path : 'tender/:tenderid/tenderview', component : TenderviewComponent},
  {path : 'tender/tendercreate', component : TendercreateComponent},
  {path : 'tender/:tenderid/tenderedit', component : TendereditComponent},
  {path : 'contractor/contractorindex', component : ContractorindexComponent},
  {path : 'contractor/:contractorid/contractoredit', component : ContractoreditComponent},
  {path : 'contractor/:contractorid/contractorview', component : ContractorviewComponent},
  {path : 'rc/rcindex', component : RcindexComponent},
  {path : 'rc/:rcid/rcview', component : RcviewComponent},
  {path : 'rc/rccreate', component : RccreateComponent},
  {path : 'rc/:rcid/rcedit', component : RceditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
