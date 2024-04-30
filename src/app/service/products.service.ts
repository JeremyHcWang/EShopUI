import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // how to make http request with HttpClient
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]> {
    //let headers = new HttpHeaders();
    return this.http.get<Product[]>("https://productapp.jollystone-4c42e2d6.eastus2.azurecontainerapps.io/api/product");
  }
}
