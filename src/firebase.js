// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVF63Vr4dJbUTgSW8HpKmizQ7ctaP5wYo",
    authDomain: "weather-app-dcb54.firebaseapp.com",
    projectId: "weather-app-dcb54",
    storageBucket: "weather-app-dcb54.appspot.com",
    messagingSenderId: "933203910717",
    appId: "1:933203910717:web:9c83338a49881aa9db0a54",
    measurementId: "G-QHW9QK4ZN7"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export{db,auth};