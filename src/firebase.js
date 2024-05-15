import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3AROFJAz85mncY-CBbFSa_M1y5G91DBo",
  authDomain: "omnithreads-6be75.firebaseapp.com",
  projectId: "omnithreads-6be75",
  storageBucket: "omnithreads-6be75.appspot.com",
  messagingSenderId: "705079991289",
  appId: "1:705079991289:web:b51ad507474b1501c3fb28",
  measurementId: "G-CE1990VNPD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
