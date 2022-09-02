// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP8dYdIBypOaclQf1bnSBUyH8NrkpjrJ0",
  authDomain: "crystal-home-deterge-99758.firebaseapp.com",
  projectId: "crystal-home-deterge-99758",
  storageBucket: "crystal-home-deterge-99758.appspot.com",
  messagingSenderId: "763360028471",
  appId: "1:763360028471:web:801619b81c780bc2acdcb2",
  measurementId: "G-9QG70VMGSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);