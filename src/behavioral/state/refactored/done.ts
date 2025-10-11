import { Order } from "./order";
import { Prepared } from "./prepared";
import { StateOrderInterface } from "./state-order";

export class Done implements StateOrderInterface {
  prepared(order: Order) {
    order.setState(new Prepared());
  }
  startDelivery(order: Order) {
    throw new Error("Order has not yet been prepared.");
  }
  finalizeDelivery(order: Order) {
    throw new Error('order has not yet been finalize.');
  }
} 