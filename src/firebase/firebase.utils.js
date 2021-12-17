import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC4PMf07-VsEuL3CUYB1R72Qv34mZbR9Ic",
  authDomain: "ec-site-b3d8d.firebaseapp.com",
  projectId: "ec-site-b3d8d",
  storageBucket: "ec-site-b3d8d.appspot.com",
  messagingSenderId: "452632660497",
  appId: "1:452632660497:web:96fcc12505430f504e3fb0",
  measurementId: "G-YZDB5N3PMR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
