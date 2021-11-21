import {initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBMq3Im_yIUnRKIwyFh4AaZ1pZOim1vUCA",
  authDomain: "netfix-clone-bdf6d.firebaseapp.com",
  projectId: "netfix-clone-bdf6d",
  storageBucket: "netfix-clone-bdf6d.appspot.com",
  messagingSenderId: "442687650441",
  appId: "1:442687650441:web:8d03a1ac0e2270214aa458"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

const auth = getAuth(app)
export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }
