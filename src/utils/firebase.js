// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB773LL17vHjN5Y_yuHmZf7DRwiZcpr4iA",
    authDomain: "netflix-gpt-app-62ba5.firebaseapp.com",
    projectId: "netflix-gpt-app-62ba5",
    storageBucket: "netflix-gpt-app-62ba5.appspot.com",
    messagingSenderId: "69948491925",
    appId: "1:69948491925:web:6d54a2ae7a3f2b6a6b339c",
    measurementId: "G-60X00KTENR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();