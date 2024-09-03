// import { Injectable } from '@nestjs/common';
// import { messaging } from '../common/firebase.config';

// @Injectable()
// export class NotificationService {
//   async sendNotification(
//     token: string,
//     title: string,
//     body: string,
//   ): Promise<void> {
//     const message = {
//       notification: {
//         title,
//         body,
//       },
//       token,
//     };
//     await messaging.send(message);
//   }
// }

import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendPushNotification(
    deviceToken: string,
    message: string,
  ): Promise<any> {
    // Integrate with your push notification service provider here
    // Example:
    // const response = await axios.post('PUSH_NOTIFICATION_API_URL', {
    //   deviceToken,
    //   message,
    //   apiKey: 'YOUR_PUSH_NOTIFICATION_API_KEY',
    // });
    // return response.data;
    throw new Error('Push notification service integration not implemented');
  }
}
