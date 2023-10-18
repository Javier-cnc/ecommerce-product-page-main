import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private httpClient: HttpClient) {}

  // return the product which match the specified id
  getProductById(id: number): Observable<Product> {
    // simulate some server request operation
    // create an observable
    var dummy = this.httpClient.get<Product>(
      'http://127.0.0.1:3000/api/product'
    );
    console.log(dummy);
    return dummy;
  }
}
