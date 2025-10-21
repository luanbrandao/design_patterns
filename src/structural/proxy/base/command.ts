import { ReportGenerator } from "./report-generator";
import { ReportGeneratorController } from "./report-generator-controller";
import { ReportRepository } from "./report-repository";

const reportRepository = new ReportRepository()
const reportGenerator = new ReportGenerator()

const reportGeneratorController = new ReportGeneratorController(reportRepository, reportGenerator)

const result = reportGeneratorController.generator(1)

console.log(result)