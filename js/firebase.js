const firebaseConfig = {
    apiKey: "AIzaSyCNXzXTGLdjp7QG_KPH1lOikX0auTz5I5s",
    authDomain: "pwa-chatbot.firebaseapp.com",
    projectId: "pwa-chatbot",
    storageBucket: "pwa-chatbot.appspot.com",
    messagingSenderId: "1040827001502",
    appId: "1:1040827001502:web:7ca122ab4ac0073a0f698f",
    measurementId: "G-ZWYYN2LC65"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();