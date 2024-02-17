import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CpanelComponent } from './cpanel.component';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { AccountsPayableComponent } from './accounts-payable/accounts-payable.component';
import { AccountsReceivableComponent } from './accounts-receivable/accounts-receivable.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    CpanelComponent,
    DashboardComponent,
    SalesComponent,
    AccountsPayableComponent,
    AccountsReceivableComponent,
    ReportsComponent,
    CustomersComponent,
    SuppliersComponent,
    SettingsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CpanelModule { }
