// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b05af.firebaseapp.com",
  projectId: "mern-blog-b05af",
  storageBucket: "mern-blog-b05af.appspot.com",
  messagingSenderId: "988358046529",
  appId: "1:988358046529:web:fb8bd0d05b044915e667c0"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);



/*THIS CODE INITIALIZE OUR APP WITH FIREBASE WE GET THIS CODE 
FROM FIREBASE DURING GOOGLE AUTHENTICATION*/
// use "import.meta.env" to access environment variables  in a Vite.js project .