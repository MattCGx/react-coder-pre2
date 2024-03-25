
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQhqFW_g7Dk9MFa_XOPbEI7XAmzZCzWKE",
  authDomain: "mcgx3d.firebaseapp.com",
  projectId: "mcgx3d",
  storageBucket: "mcgx3d.appspot.com",
  messagingSenderId: "603016284801",
  appId: "1:603016284801:web:42cfa3ee4e82fea1875b80"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

