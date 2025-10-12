import { OrderDetails } from "./order"
import { OrderFacade } from "./order-facade"

export class OrderController {
  constructor(
    private orderFacade: OrderFacade
  ) {
  }

  new(orderDetails: OrderDetails) {
    this.orderFacade.processOrder(orderDetails)
    return "Pedido realizado com sucesso!"
  }

} 