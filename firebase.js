import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDp9Uncg53GtxoYfnxByjdWR6uelZ9tjEM",
  authDomain: "rnubereats-4bb6c.firebaseapp.com",
  projectId: "rnubereats-4bb6c",
  storageBucket: "rnubereats-4bb6c.appspot.com",
  messagingSenderId: "118534825058",
  appId: "1:118534825058:web:43581f905837f8d6f25d3b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
