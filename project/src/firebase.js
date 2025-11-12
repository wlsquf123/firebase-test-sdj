// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDijh7E9KjDIED0iSRfvwrLWx4zqR4mYcE",
  authDomain: "project-2755851078642353696.firebaseapp.com",
  projectId: "project-2755851078642353696",
  storageBucket: "project-2755851078642353696.appspot.com",
  messagingSenderId: "455691332131",
  appId: "1:455691332131:web:1a149b03d4d7614d97df96",
  measurementId: "G-QEVJ37DS4V"
}



// Initialize Firebase
//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export default app;