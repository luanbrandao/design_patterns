export class Order {
  constructor(public state: string = 'DONE') { }

  getState() {
    return this.state;
  }

  setState(state: string) {
    this.state = state;
  }

}
