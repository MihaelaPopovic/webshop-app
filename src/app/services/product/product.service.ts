import { Product } from './../../models/product/product';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    products: Product[] = [];
  constructor() {}

  public getProducts(): Observable<Product[]> {
    let products= [
      {
        id: 1,
        name: 'Basic ceramic teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/basic/basic-red.png',
        category: 'ceramic',
        colors: [
            {
                name: 'red',
                picture:'./../../../assets/teapots/basic/basic-red.png'
            }
        ]
      },
      {
        id: 2,
        name: 'Bruka teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/bruka/black-bruka.png',
        category: 'porcelain',
        colors: [
            {
                name: 'white',
                picture:'./../../../assets/teapots/bruka/white-bruka.png'
            },
            {
                name: 'yellow',
                picture:'./../../../assets/teapots/bruka/yellow-bruka.png'
            },
            {
                name: 'black',
                picture:'./../../../assets/teapots/bruka/black-bruka.png'
            },
        ]
      },
      {
        id: 3,
        name: 'Classic teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/classic/white-classic.png',
        category: 'ceramic',
        colors: [
            {
                name: 'white',
                picture:'./../../../assets/teapots/classic/white-classic.png'
            },
            {
                name: 'yellow',
                picture:'./../../../assets/teapots/classic/yellow-classic.png'
            },
            {
                name: 'black',
                picture:'./../../../assets/teapots/classic/black-classic.png'
            },
        ]
      },
      {
        id: 4,
        name: 'Elephant teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/elephant/white-elephant.png',
        category: 'elephant',
        colors: [
            {
                name: 'white',
                picture:'./../../../assets/teapots/elephant/white-elephant.png'
            },
            {
                name: 'green',
                picture:'./../../../assets/teapots/elephant/green-elephant.png'
            },
        ]
      },
      {
        id: 5,
        name: 'Frangipani teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/frangipani/pink-frangipani.png',
        category: 'frangipani',
        colors: [
            {
                name: 'white',
                picture:'./../../../assets/teapots/frangipani/white-frangipani.png'
            },
            {
                name: 'green',
                picture:'./../../../assets/teapots/frangipani/green-frangipani.png'
            },
            {
                name: 'pink',
                picture:'./../../../assets/teapots/frangipani/pink-frangipani.png'
            },
        ]
      },
      {
        id: 6,
        name: 'Handbag teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/handbag/red-handbag.png',
        category: 'frangipani',
        colors: [
            {
                name: 'white',
                picture:'./../../../assets/teapots/handbag/white-handbag.png'
            },
            {
                name: 'red',
                picture:'./../../../assets/teapots/handbag/red-handbag.png'
            },
            {
                name: 'black',
                picture:'./../../../assets/teapots/handbag/black-handbag.png'
            },
        ]
      },
      {
        id: 7,
        name: 'Handle teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/handle/green-handle.png',
        category: 'japanese',
        colors: [
            {
                name: 'white',
                picture:'./../../../assets/teapots/handle/white-handle.png'
            },
            {
                name: 'black',
                picture:'./../../../assets/teapots/handle/black-handle.png'
            },
            {
                name: 'green',
                picture:'./../../../assets/teapots/handle/green-handle.png'
            },
        ]
      },
      {
        id: 7,
        name: 'Kendi teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/kendi/green-kendi.png',
        category: 'ceramic',
        colors: [
            {
                name: 'white',
                picture:'./../../../assets/teapots/kendi/white-kendi.png'
            },
            {
                name: 'black',
                picture:'./../../../assets/teapots/kendi/black-kendi.png'
            },
            {
                name: 'green',
                picture:'./../../../assets/teapots/kendi/green-kendi.png'
            },
        ]
      },
      {
        id: 9,
        name: 'Pasih teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/pasih/blue-pasih.png',
        category: 'japanese',
        colors: [
            {
                name: 'blue',
                picture:'./../../../assets/teapots/pasih/blue-pasih.png'
            },
            {
                name: 'green',
                picture:'./../../../assets/teapots/pasih/green-pasih.png'
            },
            {
                name: 'pink',
                picture:'./../../../assets/teapots/pasih/pink-pasih.png'
            },
        ]
      },
      {
        id: 10,
        name: 'Pincuk teapot',
        price: 100,
        placeholderPicture: './../../../assets/teapots/pincuk/green-pincuk.png',
        category: 'porcelain',
        colors: [
            {
                name: 'blue',
                picture:'./../../../assets/teapots/pincuk/blue-pincuk.png'
            },
            {
                name: 'green',
                picture:'./../../../assets/teapots/pincuk/green-pincuk.png'
            },
            {
                name: 'white',
                picture:'./../../../assets/teapots/pincuk/pink-pincuk.png'
            },
        ]
      },
    ]
    this.products = products.map((product) => new Product(product));
    return of(this.products);
  }
  public findProduct(productId) {
    this.getProducts();
    return this.products.find(product => {
        return product.id == productId;
    });
  
  }
}
