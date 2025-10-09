import { PdfAdapter } from "./pdf-adapter";

export class SalesReportGenerator {

  constructor(
    private readonly pdfAdapter: PdfAdapter
  ) { }

  generate(): void {
    const filename = "sales-report.pdf";
    const content = "This is the content of the sales report.";

    this.pdfAdapter.generate(filename, content);
  }
} 