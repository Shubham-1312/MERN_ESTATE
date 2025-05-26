// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mere-estate-86f73.firebaseapp.com",
  projectId: "mere-estate-86f73",
  storageBucket: "mere-estate-86f73.firebasestorage.app",
  messagingSenderId: "242112377054",
  appId: "1:242112377054:web:b4e7e284edb5a85c65d24f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
