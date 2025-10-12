import { InventoryManager } from "./inventory-manager"
import { Notifier } from "./notifier"
import { OrderDetails } from "./order"
import { PaymentProcessor } from "./payment-processor"
import { ShippingService } from "./shipping-service"

export class OrderController {
  constructor(
    private paymentProcessor: PaymentProcessor,
    private notifier: Notifier,
    private inventoryManager: InventoryManager,
    private shippingService: ShippingService,
  ) {
  }

  new(orderDetails: OrderDetails) {

    this.paymentProcessor.processPayment(orderDetails.amount)
    this.notifier.sendConfirmation(orderDetails.email)
    this.inventoryManager.updateStock(orderDetails.productId, orderDetails.quantity)
    this.shippingService.initiateShipping(orderDetails)

    return "Pedido realizado com sucesso!"
  }

} 