import { BitcoinPriceObserver } from "./bitcoin-price-observer";

export class InvestorNotifier implements BitcoinPriceObserver {
  update(price: number) {
    console.log('InvestorNotifier')
  }
}