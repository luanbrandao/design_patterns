import { TaxCalculator } from "./tax-calculator";

export class TaxController {
  constructor(private taxCalculator: TaxCalculator) { }

  calculate(taxType: string, amount: number): number {
    const tax = this.taxCalculator.calculate(taxType, amount);
    return tax
  }
}