// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM6sRq9vzRTFnvNftKUTtpmte2RKW3J4M",
  authDomain: "chat-29eaf.firebaseapp.com",
  projectId: "chat-29eaf",
  storageBucket: "chat-29eaf.appspot.com",
  messagingSenderId: "311081721789",
  appId: "1:311081721789:web:81d1043f1c91098f3bbcd4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();