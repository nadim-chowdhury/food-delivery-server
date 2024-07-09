import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  }

  async sendNotification(token: string, message: any): Promise<any> {
    return admin.messaging().sendToDevice(token, message);
  }
}
