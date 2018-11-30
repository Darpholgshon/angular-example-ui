import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SupplierComponent} from './component/supplier/supplier.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {SupplierDetailComponent} from './component/supplier-detail/supplier-detail.component';

const routes: Routes = [
  {path: 'supplier', component: SupplierComponent},
  {path: 'supplier/:id', component: SupplierDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
