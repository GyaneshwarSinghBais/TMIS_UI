import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowContractorComponent } from '../Contractor/show-contractor/show-contractor.component';
import { ShowVhicleTypeComponent } from '../Contractor/show-vhicle-type/show-vhicle-type.component';
import { AuthGuard } from '../shared/auth.guard';
import { RoleGuard } from '../shared/role.guard';
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
  {path : 'VhicleType', component : ShowVhicleTypeComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'contractor', component : ShowContractorComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'contractorEntry', component : ContractorEntryComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'addContractor', component : AddContractorComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'adminHome', component : AdminHomeComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'vhicle/vhicleindex', component : VhicleindexComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'vhicle/:vtypeid/vhicleview', component : VhicleviewComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'vhicle/vhiclecreate', component : VhiclecreateComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'vhicle/:vtypeid/vhicleedit', component : VhicleeditComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'tender/tenderindex', component : TenderindexComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'tender/:tenderid/tenderview', component : TenderviewComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'tender/tendercreate', component : TendercreateComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'tender/:tenderid/tenderedit', component : TendereditComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'contractor/contractorindex', component : ContractorindexComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'contractor/:contractorid/contractoredit', component : ContractoreditComponent
  ,canActivate:[AuthGuard,RoleGuard]},
  {path : 'contractor/:contractorid/contractorview', component : ContractorviewComponent
  ,canActivate:[AuthGuard,RoleGuard]},
  {path : 'rc/rcindex', component : RcindexComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'rc/:rcid/rcview', component : RcviewComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'rc/rccreate', component : RccreateComponent,canActivate:[AuthGuard,RoleGuard]},
  {path : 'rc/:rcid/rcedit', component : RceditComponent,canActivate:[AuthGuard,RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
