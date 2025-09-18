import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK5obNX6rogMeiYZQ52WMNGp_z5sSQpgo",
    authDomain: "myfirstapp-5c2d9.firebaseapp.com",
    projectId: "myfirstapp-5c2d9",
    storageBucket: "myfirstapp-5c2d9.firebasestorage.app",
    messagingSenderId: "860138601538",
    appId: "1:860138601538:web:d1e3736d9ced7eef5281db"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth } 