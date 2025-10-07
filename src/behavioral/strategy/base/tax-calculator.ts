export class TaxCalculator {
  calculate(taxType: string, amount: number): number {
    // toda vez que tem uma string que define um comportamento,
    // é um sinal que vai virar uma classe, exemplo 'ICMS', 'ISS', 'IPI'
    switch (taxType) {
      case 'ICMS':
        return amount * 0.1;
      case 'ISS':
        return amount * 0.06;
      case 'IPI':
        return amount * 0.08;
      default:
        throw new Error('Invalid tax type');
    }
  }
}