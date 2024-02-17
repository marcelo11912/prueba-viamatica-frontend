import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CpanelComponent } from './cpanel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { AccountsPayableComponent } from './accounts-payable/accounts-payable.component';
import { AccountsReceivableComponent } from './accounts-receivable/accounts-receivable.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { 
    path: 'principal', component: CpanelComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },

  { 
    path: 'mi_negocio', component: CpanelComponent,
    children: [
      { path: 'ventas', component: SalesComponent },
      { path: 'cuentas_por_pagar', component: AccountsPayableComponent },
      { path: 'cuentas_por_cobrar', component: AccountsReceivableComponent },
      { path: 'reportes', component: ReportsComponent },
      { path: 'clientes', component: CustomersComponent },
      { path: 'proovedores', component: SuppliersComponent }
    ]
  },

  {
    path: 'sistema', component: CpanelComponent,
    children: [
      { path: 'configuraciones', component: SettingsComponent }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ], 
  exports: [
    RouterModule
  ]
})
export class CpanelRoutingModule { }
