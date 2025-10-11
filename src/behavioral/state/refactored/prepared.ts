import { Order } from "./order";
import { StartDelivery } from "./startDelivery";
import { StateOrderInterface } from "./state-order";

export class Prepared implements StateOrderInterface {
  prepared(order: Order) {
    throw new Error("request already prepared.");
  }
  startDelivery(order: Order) {
    order.setState(new StartDelivery());
  }
  finalizeDelivery(order: Order) {
    throw new Error("Oder cannot be finalized as it is still being prepared.");
  }
} 