import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBe46WnkY4g5E0MXW2x_3s82YASe6VjWPI",
    authDomain: "react-video-steaming.firebaseapp.com",
    projectId: "react-video-steaming",
    storageBucket: "react-video-steaming.appspot.com",
    messagingSenderId: "847697461098",
    appId: "1:847697461098:web:b163efca86a27d3829af13",
    measurementId: "G-YDNJ7J8D8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)