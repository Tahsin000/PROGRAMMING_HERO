// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4pjM5oNPCqR-BpGGdDyEi9i1chCOpHnY",
  authDomain: "travel-guru-resources.firebaseapp.com",
  projectId: "travel-guru-resources",
  storageBucket: "travel-guru-resources.appspot.com",
  messagingSenderId: "865391947631",
  appId: "1:865391947631:web:2e240b3374aafd45b8c29a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
