import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { UploadProductsComponent } from './upload-products/upload-products.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    CustomersComponent,
    DashboardComponent,
    AllProductsComponent,
    UploadProductsComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
