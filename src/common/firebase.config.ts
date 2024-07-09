import * as admin from 'firebase-admin';
import * as serviceAccount from './path-to-service-account-file.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const messaging = admin.messaging();
