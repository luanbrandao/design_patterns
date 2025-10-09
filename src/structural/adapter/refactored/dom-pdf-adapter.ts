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

export class DomPdfAdapter {
  generate(filename: string, content: string): void {
    const dompdf = new mockGeneratorPDF();
    dompdf.loadHtml();
    dompdf.loadHtml();
    dompdf.generatePDF();
  }
} 