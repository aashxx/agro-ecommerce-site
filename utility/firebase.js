import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfAJrflotxUDI97iee-mOSoF6xPwr4qUI",
  authDomain: "agro-ecommerce-site.firebaseapp.com",
  projectId: "agro-ecommerce-site",
  storageBucket: "agro-ecommerce-site.appspot.com",
  messagingSenderId: "358290464403",
  appId: "1:358290464403:web:38d59e89124df9d55bf766"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };