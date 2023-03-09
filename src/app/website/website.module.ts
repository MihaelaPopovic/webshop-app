import { MaterialModule } from './../shared/modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CtaInputComponent } from './components/cta-input/cta-input.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';



@NgModule({
  declarations: [NavbarComponent, HomepageComponent, CtaInputComponent, ProductsComponent, ProductComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class WebsiteModule { }
