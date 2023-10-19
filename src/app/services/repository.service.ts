import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
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
      environment.apiUrl + '/api/product'
    );
    console.log(dummy);
    return dummy;
  }
}
