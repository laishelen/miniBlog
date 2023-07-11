import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4WUh377MVXNTbaCtAGZ0y0YEOQc-5g7Y",
  authDomain: "miniblog-c4c85.firebaseapp.com",
  projectId: "miniblog-c4c85",
  storageBucket: "miniblog-c4c85.appspot.com",
  messagingSenderId: "479639985044",
  appId: "1:479639985044:web:80934bb72ac5dfbfe18d81"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };


