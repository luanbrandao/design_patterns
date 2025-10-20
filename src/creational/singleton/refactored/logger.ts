export class Logger {

  private static instance: Logger | null = null

  private logFile: string;

  private constructor() {
    this.logFile = 'app.log';
  }

  static getInstance(): Logger {
    if (this.instance === null)
      this.instance = new Logger()

    return this.instance
  }

  log(message: string): void {
    console.log(`Log: ${message}`);
  }
} 