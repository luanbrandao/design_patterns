import { Done } from "./done";
import { StateOrderInterface } from "./state-order";

export class Order {
  private state: StateOrderInterface;
  constructor() {
    this.state = new Done();
  }

  getState() {
    return this.state;
  }

  setState(state: StateOrderInterface) {
    this.state = state;
  }

  prepared() {
    this.state.prepared(this)
  }
  startDelivery() {
    this.state.startDelivery(this)
  }
  finalizeDelivery() {
    this.state.finalizeDelivery(this)
  }

}
