import { DomPdfAdapter } from "./dom-pdf-adapter";
import { SalesReportGenerator } from "./sales-report-generator";
import { TCPdfAdapter } from "./tc-pdf-adapter";

// const pdfAdapter = new DomPdfAdapter();
const tcPdfAdapter = new TCPdfAdapter();
// const salesReportGenerator = new SalesReportGenerator(pdfAdapter);
const salesReportGenerator = new SalesReportGenerator(tcPdfAdapter);
salesReportGenerator.generate();