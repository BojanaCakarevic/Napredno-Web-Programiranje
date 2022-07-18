import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;
  public confirmed = false;

  constructor() {
    this.stock = {
      name: "Test Stock Company",
      code: "TSC",
      price: 180,
      previousPrice: 285,
      favorite: false,
      exchange: "Bla"
    }
  }

  ngOnInit(): void {
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm:any ) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      console.log('Creating stock ', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }

}
