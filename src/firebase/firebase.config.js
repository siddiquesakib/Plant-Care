// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Pk0shsg61O-VH0zmeFXlOAafCiyEHAo",
  authDomain: "plant-care-d3d4f.firebaseapp.com",
  projectId: "plant-care-d3d4f",
  storageBucket: "plant-care-d3d4f.firebasestorage.app",
  messagingSenderId: "1014544763617",
  appId: "1:1014544763617:web:ca52db581513125442c5a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
