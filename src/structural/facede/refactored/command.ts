import { InventoryManager } from "./inventory-manager";
import { Notifier } from "./notifier";
import { OrderDetails } from "./order";
import { OrderController } from "./order-controller";
import { OrderFacade } from "./order-facade";
import { PaymentProcessor } from "./payment-processor";
import { ShippingService } from "./shipping-service";

const orderDetails = new OrderDetails('test@gmail.com', 100, 2, '123')

const paymentProcessor = new PaymentProcessor()
const notifier = new Notifier()
const inventoryManager = new InventoryManager()
const shippingService = new ShippingService()

const orderFacade = new OrderFacade(
  paymentProcessor,
  notifier,
  inventoryManager,
  shippingService
)


const orderController = new OrderController(orderFacade)
orderController.new(orderDetails)