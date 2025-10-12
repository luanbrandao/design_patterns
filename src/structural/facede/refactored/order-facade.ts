import { InventoryManager } from "./inventory-manager"
import { Notifier } from "./notifier"
import { OrderDetails } from "./order"
import { PaymentProcessor } from "./payment-processor"
import { ShippingService } from "./shipping-service"

export class OrderFacade {
  constructor(
    private paymentProcessor: PaymentProcessor,
    private notifier: Notifier,
    private inventoryManager: InventoryManager,
    private shippingService: ShippingService,
  ) { }

  processOrder(orderDetails: OrderDetails): void {
    this.paymentProcessor.processPayment(orderDetails.amount)
    this.notifier.sendConfirmation(orderDetails.email)
    this.inventoryManager.updateStock(orderDetails.productId, orderDetails.quantity)
    this.shippingService.initiateShipping(orderDetails)
  }
}