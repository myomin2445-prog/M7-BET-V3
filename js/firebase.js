// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  increment,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBxr6KMD5dgyCBa7PFS5mJAEU1FKKdvo9Q",
  authDomain: "m7-bet-v3.firebaseapp.com",
  projectId: "m7-bet-v3",
  storageBucket: "m7-bet-v3.firebasestorage.app",
  messagingSenderId: "664285274604",
  appId: "1:664285274604:web:376e61a8b08767370020c9",
  measurementId: "G-CTWSZVKNN1"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export
export {
  db,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  increment,
  onSnapshot
};
