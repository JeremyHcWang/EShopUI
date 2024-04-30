import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  availableProducts:Product[] = [];

  // dependency injection
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    
    // setTimeout(() => {
    //   this.exampleVariable = "The new data"
    // }, 2000);

    this.productsService.getAllProducts().subscribe(data => 
      this.availableProducts = data 
    );
  }
}
