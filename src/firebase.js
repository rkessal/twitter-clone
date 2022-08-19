import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5Evz3wxl4ZTGNG41oaxGmu2bB3sPCcwY",

  authDomain: "twitter-clone-4fb59.firebaseapp.com",

  projectId: "twitter-clone-4fb59",

  storageBucket: "twitter-clone-4fb59.appspot.com",

  messagingSenderId: "1000264791286",

  appId: "1:1000264791286:web:1a2283a5edf08e23e328d7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
