export class OrderDetails {
  email: string;
  amount: number;
  quantity: number;
  productId: string;

  constructor(
    email: string,
    amount: number,
    quantity: number,
    productId: string,
  ) {
    this.email = email
    this.amount = amount
    this.quantity = quantity
    this.productId = productId
  }


}