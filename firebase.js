// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/* import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
 */// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyD7T02N_VBNCV81V0i9ypxjHmWluYM7Jjk",
    authDomain: "estudio-juridico-login-users.firebaseapp.com",
    projectId: "estudio-juridico-login-users",
    storageBucket: "estudio-juridico-login-users.appspot.com",
    messagingSenderId: process.env.REACT_APP_MSG_SENDER,
    appId: process.env.REACT_APP_ID,
    measurementId: "G-5JJED8BFMT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

/* const db = getFirestore(app);
const analytics = getAnalytics(app); */