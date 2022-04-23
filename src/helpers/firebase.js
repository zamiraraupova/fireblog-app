// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk_0VINTxNUU1XwkO7gfzkGoovmJL7ywE",
  authDomain: "fireblog-app-eba2d.firebaseapp.com",
  databaseURL: "https://fireblog-app-eba2d-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-eba2d",
  storageBucket: "fireblog-app-eba2d.appspot.com",
  messagingSenderId: "92411069083",
  appId: "1:92411069083:web:ab7478477c971a4a85bc3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export default app;