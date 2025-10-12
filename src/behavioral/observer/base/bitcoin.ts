export class Bitcoin {
  constructor(private price: number = 0) { }

  getPrice(): number {
    return this.price
  }

  setPrice(newPrice: number) {
    if (newPrice !== this.price)
      this.price = newPrice
  }

}
