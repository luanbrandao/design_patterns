import { Order } from "./order";
import { StateOrderInterface } from "./state-order";

export class FinalizeDelivery implements StateOrderInterface {
  prepared(order: Order) {
    throw new Error("Order has already been delivered to the customer.");
  }
  startDelivery(order: Order) {
    throw new Error("Order has already been delivered to the customer.");
  }
  finalizeDelivery(order: Order) {
    throw new Error("Order has already been delivered to the customer.");
  }
} 