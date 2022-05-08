import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { RoleFIGuard } from 'src/app/shared/role-fi.guard';
import { FinanceHomeComponent } from '../finance-home/finance-home.component';

const routes: Routes = [
  {path : 'financehome', component : FinanceHomeComponent,canActivate:[AuthGuard,RoleFIGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceroutingRoutingModule { }
