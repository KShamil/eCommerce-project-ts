import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyBnkWI6DdIHa8-A9NDdjJ3EhFb84KS40Q8",
  authDomain: "applestore-ecommerce-project.firebaseapp.com",
  databaseURL: "https://applestore-ecommerce-project-default-rtdb.firebaseio.com",
  projectId: "applestore-ecommerce-project",
  storageBucket: "applestore-ecommerce-project.appspot.com",
  messagingSenderId: "1007005671152",
  appId: "1:1007005671152:web:e40513058fe7074fe22c35",
};


const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);

export const db: firebase.firestore.Firestore = firebaseApp.firestore();
