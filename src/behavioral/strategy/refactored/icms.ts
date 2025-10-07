import { TaxTypeInterface } from "./contracts/tax-type-interface";

export class ICMS implements TaxTypeInterface {
  calculate(amount: number): number {
    return amount * 0.1;
  }
}   