export class PdfDataMiner {

  mine() {
    this.openFile()
    this.extractPdfData()
    this.parsePdfData()
    this.analyzeData()
    this.sendReport()
  }


  private openFile() {
    console.log('openFile...')
  }

  private extractPdfData() {
    console.log('extractPdfData...')
  }

  private parsePdfData() {
    console.log('parsePdfData...')
  }

  private analyzeData() {
    console.log('analyzeData...')
  }


  private sendReport() {
    console.log('sendReport...')
  }
}
