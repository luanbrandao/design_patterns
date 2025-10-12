import { BinanceApi } from "./binance-api";
import { Bitcoin } from "./bitcoin";

const bitcoin = new Bitcoin()
const binanceApi = new BinanceApi()

const newPrice = binanceApi.getLastPrice()
console.log(newPrice)

bitcoin.setPrice(newPrice)

if (bitcoin.getPrice() !== newPrice) {
  // Log
  // Notifier
  // Update news
}