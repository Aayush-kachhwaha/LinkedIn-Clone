// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDgdSoYM8ZnHLdlK7K0FYdKgwo66Pk0A-A",
    authDomain: "linkedin-clone-e5b25.firebaseapp.com",
    projectId: "linkedin-clone-e5b25",
    storageBucket: "linkedin-clone-e5b25.appspot.com",
    messagingSenderId: "920843419953",
    appId: "1:920843419953:web:34387935c3f5d5a5bcf010",
    measurementId: "G-FHTQY4ZYNM"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db, auth};