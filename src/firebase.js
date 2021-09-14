import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAL3zPll5ApAVdzIuOlTCSCK0OZnBRjhE4",
    authDomain: "todo-app-cca4a.firebaseapp.com",
    projectId: "todo-app-cca4a",
    storageBucket: "todo-app-cca4a.appspot.com",
    messagingSenderId: "573634958064",
    appId: "1:573634958064:web:3896a2bfe8239738ce2835",
    measurementId: "G-Y5SSE6KPGD"
  
});
const db = firebaseApp.firestore();
export default db;