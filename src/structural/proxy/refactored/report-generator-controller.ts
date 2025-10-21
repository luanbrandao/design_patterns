import { ReportGeneratorInterface } from "./report-generator-interface";
import { ReportGeneratorProxy } from "./report-generator-proxy";
import { ReportRepositoryInterface } from "./report-repository-interface";

export class ReportGeneratorController {
  constructor(
    private reportRepository: ReportRepositoryInterface,
    private reportGeneratorProxy: ReportGeneratorProxy
  ) {
  }

  generator(id: number) {
    const report = this.reportRepository.find(id);

    const reportData = this.reportGeneratorProxy.generate(report)

    return reportData
  }

} 