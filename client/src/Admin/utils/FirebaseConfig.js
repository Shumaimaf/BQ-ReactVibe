import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDciMUMzWyOyxF4xIq2qCD4lratKueYeRw",
  authDomain: "bq-express-storage.firebaseapp.com",
  projectId: "bq-express-storage",
  storageBucket: "bq-express-storage.appspot.com",
  messagingSenderId: "34307355791",
  appId: "1:34307355791:web:e05ba37d9c08e9e803acfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);