// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArTMU-G2LVsynweP1mQIfGHPrbEvHz1KI",
  authDomain: "publicservice-75530.firebaseapp.com",
  projectId: "publicservice-75530",
  storageBucket: "publicservice-75530.appspot.com",
  messagingSenderId: "850876188211",
  appId: "1:850876188211:web:eb7628ff2a92c2a26e0546",
  measurementId: "G-J52NE7N7ZX",
};

function initFirebase() {
  if (typeof window !== undefined) {
    initializeApp(firebaseConfig);
    console.log("Firebase has been init successfully");
  }
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db, app, initFirebase };
