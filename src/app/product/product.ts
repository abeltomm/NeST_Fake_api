import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

    //repeat = Array.from({length: 5});

    
  products: any[] = [];

    constructor(private apiService: Apiservice) { }       // Injecting the ApiService
    ngOnInit() {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });
  }

}
