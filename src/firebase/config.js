// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6H7gUtFgGH6ou1Rhx4ud3UsPoK3Pcb1w",
  authDomain: "gallery-gram-7403b.firebaseapp.com",
  projectId: "gallery-gram-7403b",
  storageBucket: "gallery-gram-7403b.appspot.com",
  messagingSenderId: "131208836760",
  appId: "1:131208836760:web:42b70febd6e553c25782ed",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
