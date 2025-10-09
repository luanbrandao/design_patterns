class mockGeneratorTCPDF {
  addPage(): void {
    console.log(`mockGeneratorTCPDF.addPage`);
  }
  setFont(): void {
    console.log(`mockGeneratorTCPDF.setFont`);
  }
  write(): void {
    console.log(`mockGeneratorTCPDF.write`);
  }
}

export class TCPdfAdapter {
  generate(filename: string, content: string): void {
    const dompdf = new mockGeneratorTCPDF();
    dompdf.addPage();
    dompdf.setFont();
    dompdf.write();
  }
} 