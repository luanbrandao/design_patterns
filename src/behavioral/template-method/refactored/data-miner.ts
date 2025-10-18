export abstract class DataMiner {
  // Muito útil para projetos legados.
  // quando já tem um problema e depois arruma com o template-method
  mine() {
    this.openFile()
    this.extractData()
    this.parseData()
    this.analyzeData()
    this.sendReport()
  }

  protected abstract openFile()
  protected abstract extractData()
  protected abstract parseData()

  protected analyzeData() {
    console.log('analyzeData...')
  }


  protected sendReport() {
    console.log('sendReport...')
  }
}