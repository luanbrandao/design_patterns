
import { BitcoinPriceObserver } from "./bitcoin-price-observer";

export class BinancePriceLog implements BitcoinPriceObserver {
  update(price: number) {
    console.log('BinancePriceLog')
  }
}