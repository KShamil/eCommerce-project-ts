import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBnkWI6DdIHa8-A9NDdjJ3EhFb84KS40Q8",
  authDomain: "applestore-ecommerce-project.firebaseapp.com",
  databaseURL: "https://applestore-ecommerce-project-default-rtdb.firebaseio.com",
  projectId: "applestore-ecommerce-project",
  storageBucket: "applestore-ecommerce-project.appspot.com",
  messagingSenderId: "1007005671152",
  appId: "1:1007005671152:web:e40513058fe7074fe22c35",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase();
