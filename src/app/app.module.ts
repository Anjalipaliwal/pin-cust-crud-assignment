import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPinCustomerCrudComponent } from './pin-customer-crud/list-pin-customer-crud/list-pin-customer-crud.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { CreateCustomerComponent } from './pin-customer-crud/create-customer/create-customer.component';
import { CreatePinComponent } from './pin-customer-crud/create-pin/create-pin.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    ListPinCustomerCrudComponent,
    CreateCustomerComponent,
    CreatePinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSelectModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],  
})
export class AppModule { }
