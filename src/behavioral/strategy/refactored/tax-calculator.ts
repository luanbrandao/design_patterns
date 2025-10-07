import { TaxTypeInterface } from "./contracts/tax-type-interface";

export class TaxCalculator {

  private taxType!: TaxTypeInterface;

  calculate(amount: number): number {
    return this.taxType.calculate(amount);
  }

  setTaxType(taxType: TaxTypeInterface): TaxTypeInterface {
    this.taxType = taxType;
    return this
  }
}