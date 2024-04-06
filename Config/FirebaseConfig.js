import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(); // Initialize Auth

// Create a Google authentication provider
const provider = new GoogleAuthProvider(); // Create GoogleAuthProvider instance

export { auth, provider, analytics };