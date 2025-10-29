import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Check if we're in a browser environment
const isClient = typeof window !== 'undefined';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Validate Firebase config (only in client and if config exists)
const isConfigValid = isClient && firebaseConfig.apiKey && firebaseConfig.projectId;

// Initialize Firebase only if we're on the client and config is valid
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (isConfigValid) {
  // Check if Firebase has already been initialized
  const existingApps = getApps();
  if (existingApps.length === 0) {
    try {
      app = initializeApp(firebaseConfig);
      auth = getAuth(app);
      db = getFirestore(app);
    } catch (error) {
      console.error('Firebase initialization error:', error);
      // In build time, we don't want to throw errors
      if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
        console.warn('Firebase initialization skipped during build');
      }
    }
  } else {
    app = existingApps[0];
    auth = getAuth(app);
    db = getFirestore(app);
  }
}

// Export with null checks - components should handle these gracefully
export { auth, db };
export default app;
