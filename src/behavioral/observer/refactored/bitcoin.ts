import { BitcoinPriceObserver } from "./bitcoin-price-observer"

export class Bitcoin {
  constructor(
    private price: number = 0,
    private observers: BitcoinPriceObserver[] = []
  ) { }

  getPrice(): number {
    return this.price
  }

  setPrice(newPrice: number) {
    if (newPrice !== this.price) {
      this.price = newPrice
      this.notifierObservers()
    }
  }

  addObservers(observer: BitcoinPriceObserver): void {
    this.observers.push(observer)
  }

  private notifierObservers(): void {
    this.observers.forEach(observer => observer.update(this.price))
  }

}
