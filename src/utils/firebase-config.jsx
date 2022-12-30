// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBae-2TbMMxhRVuJ4hBeGEazTkCwqgpzQo",
  authDomain: "react-netflix-clone-9ab9a.firebaseapp.com",
  projectId: "react-netflix-clone-9ab9a",
  storageBucket: "react-netflix-clone-9ab9a.appspot.com",
  messagingSenderId: "663978685545",
  appId: "1:663978685545:web:27db5ec839e06231d4def8",
  measurementId: "G-T6HETFR352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);