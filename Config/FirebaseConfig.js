// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ZGlYE7mMeqAcs0pFk_oC225dzwISJ-Q",
  authDomain: "social-media-a50dd.firebaseapp.com",
  projectId: "social-media-a50dd",
  storageBucket: "social-media-a50dd.appspot.com",
  messagingSenderId: "992137852568",
  appId: "1:992137852568:web:80484975306916908842ed",
  measurementId: "G-SZ94KJ1X68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export default firebaseConfig;
