import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA344hYgxioRVwOR8Hv96arFBGBuFo50l8",
  authDomain: "react-cv-a8dad.firebaseapp.com",
  projectId: "react-cv-a8dad",
  storageBucket: "react-cv-a8dad.appspot.com",
  messagingSenderId: "990623655171",
  appId: "1:990623655171:web:ee41e6225a017f0cedf536",
  measurementId: "G-P4TX1G0FQ8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
