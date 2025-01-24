import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPinCustomerCrudComponent } from './pin-customer-crud/list-pin-customer-crud/list-pin-customer-crud.component';
import { CreateCustomerComponent } from './pin-customer-crud/create-customer/create-customer.component';
import { CreatePinComponent } from './pin-customer-crud/create-pin/create-pin.component';

const routes: Routes = [
  // Define the default route or any routes here
  { path: 'list-pin-cust-crud', component: ListPinCustomerCrudComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'create-pin', component: CreatePinComponent },
  { path: '', redirectTo: '/list-pin-cust-crud' ,pathMatch: 'full' },  // Set CustomComponent as the default
  // other routes can go here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
