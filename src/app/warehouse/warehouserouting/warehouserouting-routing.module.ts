import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { RoleWHGuard } from 'src/app/shared/role-wh.guard';
import { RoleGuard } from 'src/app/shared/role.guard';
import { WarehouseHomeComponent } from '../warehouse-home/warehouse-home.component';


const routes: Routes = [
  {path : 'warehousehome', component : WarehouseHomeComponent,canActivate:[AuthGuard,RoleWHGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseroutingRoutingModule { }
