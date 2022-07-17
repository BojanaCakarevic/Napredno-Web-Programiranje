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
  public stock1!: Stock;
  public stock2!: Stock;
  public stockClasses;

  public stocks!: Array<Stock>

  constructor() {
    this.stock = {
      name: "Test Stock Company",
      code: "TSC",
      price: 180,
      previousPrice: 285,
      favorite: false
    }
    this.stock1 = {
      name: "Second Stock Company",
      code: "SSC",
      price: 18,
      previousPrice: 5,
      favorite: false
    }
    this.stock2 = {
      name: "Last Stock Company",
      code: "LSC",
      price: 80,
      previousPrice: 285,
      favorite: false
    }

    this.stocks = [];
    this.stocks.push(this.stock1);
    this.stocks.push(this.stock2);
    this.stocks.push(this.stock);

    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive": this.isPositiveChange(),
      "negative": !this.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    };
  }

  ngOnInit(): void {
  }

  toggleFavorite(index:number) {
    console.log("We are toogling the favorite state for this stock", index);
    this.stocks[index].favorite = !this.stock.favorite;
  }

  isPositiveChange(): boolean {
    return this.stock.price >= this.stock.previousPrice;
  }

}
