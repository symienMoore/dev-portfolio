import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCbpF6pT2uXjYrPv0R6iCI6hJ0cYQYTKA",
  authDomain: "portfolio-d4a42.firebaseapp.com",
  projectId: "portfolio-d4a42",
  storageBucket: "portfolio-d4a42.appspot.com",
  messagingSenderId: "1011243911013",
  appId: "1:1011243911013:web:c8bd06fcc05fd1d647838c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;