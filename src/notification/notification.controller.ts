// import { Controller, Post, Body } from '@nestjs/common';
// import { FirebaseService } from './firebase.service';

// @Controller('notifications')
// export class NotificationController {
//   constructor(private readonly firebaseService: FirebaseService) {}

//   @Post('send')
//   async sendNotification(
//     @Body('token') token: string,
//     @Body('message') message: any,
//   ) {
//     return this.firebaseService.sendNotification(token, message);
//   }
// }
