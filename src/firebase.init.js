// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4K2VI-cu_qH_6Al-NgKzx0DK0hEm0zEI",
  authDomain: "auth-moha-milon-4b10e.firebaseapp.com",
  projectId: "auth-moha-milon-4b10e",
  storageBucket: "auth-moha-milon-4b10e.firebasestorage.app",
  messagingSenderId: "147539006679",
  appId: "1:147539006679:web:41bb3f293b68e299454c92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);