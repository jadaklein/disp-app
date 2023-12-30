import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJTdG2bYawga56aENR1jR-tHIaMFF0bik",
  authDomain: "dispapp-6f4ca.firebaseapp.com",
  projectId: "dispapp-6f4ca",
  storageBucket: "dispapp-6f4ca.appspot.com",
  messagingSenderId: "1006226417454",
  appId: "1:1006226417454:web:b9c108ba528a87cc77fcbf",
  measurementId: "G-K1P6M05985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth }