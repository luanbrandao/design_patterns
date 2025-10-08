import { NotificationTypeFactory } from "./notification-factory";

export class NotificationController {
  sendNotification(notificationType, recipient, message): void {

    const notification = NotificationTypeFactory.create(notificationType);

    notification.send(message, recipient);
  }
}