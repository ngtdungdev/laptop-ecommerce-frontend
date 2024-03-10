import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAbyBTeD8rydz7Zx_dyctEtrqI2E6-11dE",
    authDomain: "laptop-ecommerce-98078.firebaseapp.com",
    projectId: "laptop-ecommerce-98078",
    storageBucket: "laptop-ecommerce-98078.appspot.com",
    messagingSenderId: "33084970527",
    appId: "1:33084970527:web:8d50baeb1b6c1f8731672a",
    measurementId: "G-19QN8XHNJZ" // optional since Firebase JS SDK v7.20.0
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
