import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';



@NgModule({
  declarations: [
    AddSupplierComponent,
    ViewSupplierComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddSupplierComponent,ViewSupplierComponent

  ]
})
export class SupplierModule { }
