export class CsvDataMiner {

  mine() {
    this.openFile()
    this.extractCsvData()
    this.parseCsvData()
    this.analyzeData()
    this.sendReport()
  }


  private openFile() {
    console.log('openFile...')
  }

  private extractCsvData() {
    console.log('extractCsvData...')
  }

  private parseCsvData() {
    console.log('parseCsvData...')
  }

  private analyzeData() {
    console.log('analyzeData...')
  }


  private sendReport() {
    console.log('sendReport...')
  }
}
