import { DataMiner } from "./data-miner"

export class CsvDataMiner extends DataMiner {
  protected openFile() {
    console.log('openFile...')
  }

  protected extractData() {
    console.log('extractCsvData...')
  }

  protected parseData() {
    console.log('parseCsvData...')
  }
}
