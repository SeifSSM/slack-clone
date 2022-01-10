import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQ2lht_luTpxRu3SfSDolzfsUfAJRgLYs",
  authDomain: "slack-clone-aa4e7.firebaseapp.com",
  projectId: "slack-clone-aa4e7",
  storageBucket: "slack-clone-aa4e7.appspot.com",
  messagingSenderId: "1040915351440",
  appId: "1:1040915351440:web:e8ef49b9147b2090185515",
};
 


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
