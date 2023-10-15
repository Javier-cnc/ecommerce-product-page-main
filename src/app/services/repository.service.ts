import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor() {}

  // return the product which match the specified id
  getProductById(id: number): Observable<Product> {
    // simulate some server request operation
    // create an observable
    var observable = new ReplaySubject<Product>();

    // use a timming function to simulate some delay in the server
    setTimeout(() => {
      observable.next({
        id: '123423412',
        name: 'Fall limited edition sneakers',
        images: [
          'assets/images/image-product-1.jpg',
          'assets/images/image-product-2.jpg',
          'assets/images/image-product-3.jpg',
          'assets/images/image-product-4.jpg',
        ],
        description: `these low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.`,
        price: 125,
        oldPrice: 250,
      });
    }, 500);
    return observable;
  }
}
