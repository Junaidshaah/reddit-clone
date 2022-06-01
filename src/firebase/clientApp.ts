import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1dt6rUHP_ITAK3YAXrysTrp6uLK0VZWE",
  authDomain: "react-clone-yt-336cb.firebaseapp.com",
  projectId: "react-clone-yt-336cb",
  storageBucket: "react-clone-yt-336cb.appspot.com",
  messagingSenderId: "620791838925",
  appId: "1:620791838925:web:b75225e3fbc467c8f19184",
  measurementId: "G-T1RTFWD4WL"
};

// Initialize Firebase for SSR
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
