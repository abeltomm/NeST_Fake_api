import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
@Component({
  selector: 'app-card',
  imports: [CommonModule,],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  // repeat = Array.from({length: 6});

  products: any[] = [];

    constructor(private apiService: Apiservice) { }       // Injecting the ApiService
    ngOnInit() {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });
  }
  

}
