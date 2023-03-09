import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { WebsiteComponent } from './website.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';


const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
     children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/:id',
        component: ProductComponent,
      },
    ], 
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class WebsiteRoutingModule { }

