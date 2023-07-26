import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwVraBwnTcNODbMpjxUGMZyqSBHnxcwhg",
    authDomain: "realtime-chat-3ecce.firebaseapp.com",
    projectId: "realtime-chat-3ecce",
    storageBucket: "realtime-chat-3ecce.appspot.com",
    messagingSenderId: "915032613999",
    appId: "1:915032613999:web:20e3d8c3c1fb6dd308199a"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = app.firestore();
