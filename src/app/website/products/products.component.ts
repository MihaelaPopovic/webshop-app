import { Product } from './../../models/product/product';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
    
  }
  filterProductsBy(filterBy?: string | null) {
    const btns = document.getElementsByClassName('category');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
    this.getProducts();
    if(filterBy) {
      this.products = this.products.filter(product => {
        return product.category ==filterBy;
      })
    }
  }
  goToProduct(product: Product) {
    this.router.navigate(['/products/'+product.id]);
  }
}
