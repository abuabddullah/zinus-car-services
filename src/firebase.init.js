// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvto9lrD1dmwOi3VeEl1u5DcYYzclvy04",
  authDomain: "module60-zinus-car-services.firebaseapp.com",
  projectId: "module60-zinus-car-services",
  storageBucket: "module60-zinus-car-services.appspot.com",
  messagingSenderId: "182646763176",
  appId: "1:182646763176:web:ebe070e3341fa391c69c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;