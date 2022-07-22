import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQ-tcH_KSW1QtOutiWQ1Ra6zOLkX14RnU",
    authDomain: "linkedin-clone-ecb64.firebaseapp.com",
    projectId: "linkedin-clone-ecb64",
    storageBucket: "linkedin-clone-ecb64.appspot.com",
    messagingSenderId: "897468744128",
    appId: "1:897468744128:web:353893430e401744c88825",
    measurementId: "G-4DX7NK16SS"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};