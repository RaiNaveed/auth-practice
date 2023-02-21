import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CustomersComponent } from './customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { UploadProductsComponent } from './upload-products/upload-products.component';

const routes: Routes = [
  {path:'', component:CustomersComponent, children:[
    {path:'', component:DashboardComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'all-products', component:AllProductsComponent},
    {path:'orders', component:OrdersComponent},
    {path:'upload-products', component:UploadProductsComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
