import { NotificationTypeInterface } from "./notification-type-interface";

export class EmailNotification implements NotificationTypeInterface {
  send(message: string, recipient: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
} 