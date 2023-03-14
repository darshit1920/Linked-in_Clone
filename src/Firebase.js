import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqoM7usN7FmzIw6vLV-Ggzsj1pId5VBgo",
  authDomain: "linkedin-clone-22733.firebaseapp.com",
  projectId: "linkedin-clone-22733",
  storageBucket: "linkedin-clone-22733.appspot.com",
  messagingSenderId: "579920428691",
  appId: "1:579920428691:web:07e2f7a93fda468a379766",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
