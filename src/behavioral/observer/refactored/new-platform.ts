
import { BitcoinPriceObserver } from "./bitcoin-price-observer";

export class NewPlatform implements BitcoinPriceObserver {
  update(price: number) {
    console.log('NewPlatform')
  }
}