import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrYmJ1NO0qr_b2WMkMe3SGRipkRA3DCcE",
  authDomain: "crwn-db-4e590.firebaseapp.com",
  projectId: "crwn-db-4e590",
  storageBucket: "crwn-db-4e590.appspot.com",
  messagingSenderId: "622083243711",
  appId: "1:622083243711:web:57863aef2acc488dd4d00a",
  measurementId: "G-FVKTCBH4JW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
