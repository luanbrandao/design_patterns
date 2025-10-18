import { DataMiner } from "./data-miner"

export class DocDataMiner extends DataMiner {
  protected openFile() {
    console.log('openFile...')
  }

  protected extractData() {
    console.log('extractDocData...')
  }

  protected parseData() {
    console.log('parseDocData...')
  }
}
