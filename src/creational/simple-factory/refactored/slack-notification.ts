import { NotificationTypeInterface } from "./notification-type-interface";

export class SlackNotification implements NotificationTypeInterface {
  send(message: string, recipient: string): void {
    console.log(`Sending slack to ${recipient}: ${message}`);
  }
} 