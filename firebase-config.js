import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import {
  getFirestore,
  serverTimestamp,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  getDocs,
  where
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBK0o0-NzlyouzcpkqpXgoBmr-zeLoeIII",
  authDomain: "zona-container-e79ab.firebaseapp.com",
  projectId: "zona-container-e79ab",
  storageBucket: "zona-container-e79ab.firebasestorage.app",
  messagingSenderId: "710277803045",
  appId: "1:710277803045:web:060be0331633950e5923cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  db,
  auth,
  serverTimestamp,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  getDocs,
  where,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged
};
