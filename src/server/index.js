import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9OqzmXxKODM3AWgoqkpDV_D2IzZlq6Cs",
  authDomain: "belissimo-9ab28.firebaseapp.com",
  projectId: "belissimo-9ab28",
  storageBucket: "belissimo-9ab28.appspot.com",
  messagingSenderId: "113643068055",
  appId: "1:113643068055:web:0ed94eafdb527b23ed27d2",
  measurementId: "G-7YJQQ49M2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)