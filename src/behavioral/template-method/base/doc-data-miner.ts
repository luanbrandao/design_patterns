export class DocDataMiner {

  mine() {
    this.openFile()
    this.extractDocData()
    this.parseDocData()
    this.analyzeData()
    this.sendReport()
  }


  private openFile() {
    console.log('openFile...')
  }

  private extractDocData() {
    console.log('extractDocData...')
  }

  private parseDocData() {
    console.log('parseDocData...')
  }

  private analyzeData() {
    console.log('analyzeData...')
  }


  private sendReport() {
    console.log('sendReport...')
  }
}
