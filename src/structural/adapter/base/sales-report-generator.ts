class mockGeneratorPDF {
  loadHtml(): void {
    console.log(`mockGeneratorPDF.loadHtml`);
  }
  setPaper(): void {
    console.log(`mockGeneratorPDF.setPaper`);
  }
  generatePDF(): void {
    console.log(`mockGeneratorPDF.generatePDF`);
  }
}

export class SalesReportGenerator {
  generate(): void {
    // toda vez que dar um new gera um acoplamento
    const dompdf = new mockGeneratorPDF();
    dompdf.loadHtml();
    dompdf.loadHtml();
    dompdf.generatePDF();
  }
} 