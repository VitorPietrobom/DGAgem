// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAu9zEUoNdkbn59c7YO_8HowOfLPexJzvI",
    authDomain: "dgagem2.firebaseapp.com",
    projectId: "dgagem2",
    storageBucket: "dgagem2.appspot.com",
    messagingSenderId: "814031934959",
    appId: "1:814031934959:web:f20cea599e82e1ee9d121a"
  };


const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider(app);

export { db, auth, googleProvider };