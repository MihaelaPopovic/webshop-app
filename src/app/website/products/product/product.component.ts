import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../../models/product/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.id) {
        this.findProduct(params.id);
      }
    });
  }
  findProduct(productId: number) {
    this.product = this.productService.findProduct(productId);
  }
}
