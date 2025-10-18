import { DataMiner } from "./data-miner"

export class PdfDataMiner extends DataMiner {
  protected openFile() {
    console.log('openFile...')
  }

  protected extractData() {
    console.log('extractPdfData...')
  }

  protected parseData() {
    console.log('parsePdfData...')
  }
}
