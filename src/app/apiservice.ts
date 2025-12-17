import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http: HttpClient) { }



  getProducts() {
    return this.http.get("https://fakestoreapi.com/products"); 
  }
  
  getsingleProduct(id:string) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

}
