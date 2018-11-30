import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SupplierComponent} from './component/supplier/supplier.component';
import {SupplierDetailComponent} from './component/supplier-detail/supplier-detail.component';
import {SupplierService} from "./service/supplier.service";
import { MessagesComponent } from './component/messages/messages.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierComponent,
    SupplierDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
