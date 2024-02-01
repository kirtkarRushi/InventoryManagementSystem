import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ProductModule,SupplierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
