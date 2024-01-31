// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR3Bi-4q_6kAM9D3HeP9yoAwKeGNPk8FU",
  authDomain: "react-journal-app-4dd74.firebaseapp.com",
  projectId: "react-journal-app-4dd74",
  storageBucket: "react-journal-app-4dd74.appspot.com",
  messagingSenderId: "16470940409",
  appId: "1:16470940409:web:5e82e04ff52f2b00d22028",
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );