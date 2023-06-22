import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
console.log({ firebaseConfig });
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

const db = getFirestore(firebaseApp);

export const inserUser = async (
  userId: string,
  name: string,
  email: string,
  imageURL: string
) =>
  setDoc(doc(db, 'users', email), {
    userId,
    name,
    email,
    imageURL,
  });
