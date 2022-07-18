import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  public product: Product;
 // public products: Array<Product>;
  public productClasses;
  public quantities: Array<Number>;

  constructor() { 
    this.product = {
      name: "Bottle",
      price: 10,
      imageURL: "data:image/jpeg;base64,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",
      onSale: true,
      quantity: 0
    };
    this.productClasses = {
      "green": this.product.onSale,
      "red": !this.product.onSale
    };

    this.quantities = [];
    for (let i = 0; i < 20; i++) {
      this.quantities.push(i);
    };
  }

  quantityMinus() {
    this.product.quantity--;
  }

  quantityPlus() {
    this.product.quantity++;
  }

  ngOnInit(): void {
  }

  setQuantity(numb: number) {
    this.product.quantity == numb;
  }

}
