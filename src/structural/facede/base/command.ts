import { InventoryManager } from "./inventory-manager";
import { Notifier } from "./notifier";
import { OrderDetails } from "./order";
import { OrderController } from "./order-controller";
import { PaymentProcessor } from "./payment-processor";
import { ShippingService } from "./shipping-service";

const order = new OrderDetails('test@gmail.com', 100, 2, '123')

const paymentProcessor = new PaymentProcessor()
const notifier = new Notifier()
const inventoryManager = new InventoryManager()
const shippingService = new ShippingService()

const orderController = new OrderController(
  paymentProcessor,
  notifier,
  inventoryManager,
  shippingService
)

orderController.new(order);