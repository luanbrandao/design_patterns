import { Order } from "./order";

const order = new Order();
console.log(order.getState());

order.setState('preparing');
console.log(order.getState());