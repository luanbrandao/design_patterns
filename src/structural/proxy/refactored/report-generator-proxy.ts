import { CacheInterface } from "./cache-intreface";
import { ReportGenerator } from "./report-generator";
import { ReportGeneratorInterface } from "./report-generator-interface";

export class ReportGeneratorProxy implements ReportGeneratorInterface {

  constructor(
    private reportGenerator: ReportGenerator,
    private cache: CacheInterface
  ) { }


  generate(report: any) {
    const isCache = this.cache.get(report)
    if (isCache) {
      return isCache
    }

    const newReport = this.reportGenerator.generate(report)
    this.cache.save(report)

    return newReport
  }
}