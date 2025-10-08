import { EmailNotification } from "./email-notification";
import { SlackNotification } from "./slack-notification";
import { SmsNotification } from "./sms-notification.";

export class NotificationController {
  sendNotification(notificationType, recipient, message): void {
    let notification;

    if (notificationType === 'email') {
      notification = new EmailNotification();
    }

    if (notificationType === 'sms') {
      notification = new SmsNotification();
    }

    if (notificationType === 'slack') {
      notification = new SlackNotification();
    }

    notification.send(message, recipient);

  }
}