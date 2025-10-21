import { Cache } from "./cache";
import { ReportGenerator } from "./report-generator";
import { ReportGeneratorController } from "./report-generator-controller";
import { ReportGeneratorProxy } from "./report-generator-proxy";
import { ReportRepository } from "./report-repository";

const reportGenerator = new ReportGenerator()
const cache = new Cache()

const reportRepository = new ReportRepository()
const reportGeneratorProxy = new ReportGeneratorProxy(reportGenerator, cache)

const reportGeneratorController = new ReportGeneratorController(reportRepository, reportGeneratorProxy)

const result = reportGeneratorController.generator(1)

console.log(result)