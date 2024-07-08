// lib/firebaseAdmin.js
import admin from 'firebase-admin';

var serviceAccount = require("./innopulse-4ef9d-firebase-adminsdk-40uy1-b765fc8d6c.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

const storage = admin.storage();
export { storage };

const firestore = admin.firestore();
export { firestore };

