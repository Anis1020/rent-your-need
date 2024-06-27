// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmVLaF6VNc2IZ7NHVD9NMuwEfuvYd_qtk",
  authDomain: "rent-your-need.firebaseapp.com",
  projectId: "rent-your-need",
  storageBucket: "rent-your-need.appspot.com",
  messagingSenderId: "1:754142472359:web:90153de1a7299f4e10d382",
  appId: "de493b5e50a5e8e960c213364bcdc9e7",
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_SECRET_apiKey,
//   authDomain: import.meta.env.VITE_SECRET_authDomain,
//   projectId: import.meta.env.VITE_SECRET_projectId,
//   storageBucket: import.meta.env.VITE_SECRET_storageBucket,
//   messagingSenderId: import.meta.env.VITE_SECRET_messagingSenderId,
//   appId: import.meta.env.VITE_SECRET_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
