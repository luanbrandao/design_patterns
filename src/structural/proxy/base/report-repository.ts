import { ReportRepositoryInterface } from "./report-repository-interface";

export class ReportRepository implements ReportRepositoryInterface {
  find(id: number) {
    return id
  }
}