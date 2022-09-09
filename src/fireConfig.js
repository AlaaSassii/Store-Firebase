import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0_OTkm9TEItrsQiDOS2Ktbkd6PGL05SI",
  authDomain: "store-books-a007c.firebaseapp.com",
  projectId: "store-books-a007c",
  storageBucket: "store-books-a007c.appspot.com",
  messagingSenderId: "371505141326",
  appId: "1:371505141326:web:d5118bc60146565262151f",
  measurementId: "G-9D14R44VDS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();