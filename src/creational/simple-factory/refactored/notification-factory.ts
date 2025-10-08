import { NotificationTypeInterface } from "./notification-type-interface";
import { EmailNotification } from "../base/email-notification";
import { SlackNotification } from "./slack-notification";
import { SmsNotification } from "./sms-notification.";

export class NotificationTypeFactory {

  //tomar cuidado com os metodos staticos, maior inimigo dos testes
  static create(notificationType: string): NotificationTypeInterface {
    if (notificationType === 'email') {
      return new EmailNotification();
    }

    if (notificationType === 'sms') {
      return new SmsNotification();
    }

    if (notificationType === 'slack') {
      return new SlackNotification();
    }

    throw new Error('Invalid notification type');
  }
} 