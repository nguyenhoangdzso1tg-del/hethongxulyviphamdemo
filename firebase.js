import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmwc5TKzYZ8URPQqXwC1TBltuWoDRHKig",
  authDomain: "xulivipham-92078.firebaseapp.com",
  projectId: "xulivipham-92078",
  storageBucket: "xulivipham-92078.appspot.com",
  messagingSenderId: "773225892066",
  appId: "1:773225892066:web:34d8f60194922c9579f6bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("Firebase v9 connected", db);
