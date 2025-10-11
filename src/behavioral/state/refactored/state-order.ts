import { Order } from "./order"

export interface StateOrderInterface {
  prepared(order: Order): void
  startDelivery(order: Order): void
  finalizeDelivery(order: Order): void
}