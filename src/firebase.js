import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhN54t9OiTbnEjkSIvbBUjy3QrLg0BxFA",
    authDomain: "e-commerce-76c27.firebaseapp.com",
    projectId: "e-commerce-76c27",
    storageBucket: "e-commerce-76c27.appspot.com",
    messagingSenderId: "167543518550",
    appId: "1:167543518550:web:622b4003dfad3b096112f7",
    measurementId: "G-YT2T6LMX0G"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;