import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../models/add.product.response.model';
import { Product } from '../models/product.model';
import { ProductResponse } from '../models/product.response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl =
    'https://my-first-firebase-ce2be-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/products.json',
      product,
      this.httpOptions
    );
  }
  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      'https://my-first-firebase-ce2be-default-rtdb.firebaseio.com/api/products.json'
    );
  }


}
