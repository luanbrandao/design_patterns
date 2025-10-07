import { TaxTypeInterface } from "./contracts/tax-type-interface";
import { ICMS } from "./icms";
import { IPI } from "./ipi";
import { ISS } from "./iss";
import { TaxCalculator } from "./tax-calculator";

export class TaxController {

  constructor(private readonly taxCalculator: TaxCalculator) { }

  calculate(taxType: string, amount: number): number {
    // não strategy não resolve o problema de ter um switch/case ou if/elses
    // mas resolve os problemas de:
    // 1 single responsibility principle
    // 2 open/closed principle
    // 3 avoid primitive obsession
    // o switch/case ou if/else são substituídos por classes que implementam
    // a interface TaxTypeInterface

    // pode resolver com uma factory
    let type: TaxTypeInterface;
    switch (taxType) {
      case 'ICMS':
        type = new ICMS()
      case 'ISS':
        type = new ISS()
      case 'IPI':
        type = new IPI()
      default:
        throw new Error('Invalid tax type');

    }

    return this.taxCalculator.setTaxType(type)
      .calculate(amount);
  }

}