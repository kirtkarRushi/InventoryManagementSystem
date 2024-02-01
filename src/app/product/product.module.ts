import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';



@NgModule({
  declarations: [
    AddProductComponent,
    ViewproductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddProductComponent,ViewproductComponent
  ]
})
export class ProductModule { }
