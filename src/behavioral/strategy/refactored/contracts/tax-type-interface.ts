// essa interface é o strategy
export interface TaxTypeInterface {
  calculate(amount: number): number;
} 