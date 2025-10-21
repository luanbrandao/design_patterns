import { ReportGeneratorInterface } from "./report-generator-interface";
import { ReportRepositoryInterface } from "./report-repository-interface";

export class ReportGeneratorController {
  constructor(
    private reportRepository: ReportRepositoryInterface,
    private reportGenerator: ReportGeneratorInterface
  ) {
  }

  generator(id: number) {
    const report = this.reportRepository.find(id);

    const reportData = this.reportGenerator.generate(report)

    return reportData
  }

} 