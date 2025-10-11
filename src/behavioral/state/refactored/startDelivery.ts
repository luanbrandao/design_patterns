import { FinalizeDelivery } from "./finalizeDelivery";
import { Order } from "./order";
import { StateOrderInterface } from "./state-order";

export class StartDelivery implements StateOrderInterface {
  prepared(order: Order) {
    throw new Error("request already prepared.");
  }
  startDelivery(order: Order) {
    throw new Error('Order has already been sent to the customer');
  }
  finalizeDelivery(order: Order) {
    order.setState(new FinalizeDelivery());
  }
} 