// Importe las funciones que necesite de los SDK que necesite
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// La configuración Firebase de tu aplicación web

const firebaseConfig = {
                        apiKey: "AIzaSyDVAKo36d6I-yQvyyDEHZwkW6m1dc4lTew",
                        authDomain: "gabushop-61283.firebaseapp.com",
                        projectId: "gabushop-61283",
                        storageBucket: "gabushop-61283.appspot.com",
                        messagingSenderId: "475031663693",
                        appId: "1:475031663693:web:bf60e2d86e4b869b345804"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)