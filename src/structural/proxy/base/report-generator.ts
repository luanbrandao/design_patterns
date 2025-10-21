import { ReportGeneratorInterface } from "./report-generator-interface";

export class ReportGenerator implements ReportGeneratorInterface {
  generate(report: any) {
    return `report: ${report}`
  }
}