import { NotificationTypeInterface } from "./notification-type-interface";

export class SmsNotification implements NotificationTypeInterface {
  send(message: string, recipient: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
} 