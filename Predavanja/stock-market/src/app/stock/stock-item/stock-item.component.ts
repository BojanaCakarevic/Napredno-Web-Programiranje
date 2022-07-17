import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock!: Stock;

  constructor() {
    this.stock = {
      name: "Test Stock Company",
      code: "TSC",
      price: 80,
      previousPrice: 85,
      favorite: false
    }
   }

  ngOnInit(): void {
  }

  toggleFavorite() {
    console.log("We are toogling the favorite state for this stock");
    this.stock.favorite = !this.stock.favorite;
  }

  isPositiveChange(): boolean {
    return this.stock.price >= this.stock.previousPrice;
  }

}
