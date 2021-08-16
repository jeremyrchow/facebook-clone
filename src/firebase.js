import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRCha4wPV9LfJfVEqw4OrNKNGW6serWLw",
    authDomain: "facebook-clone-c8e80.firebaseapp.com",
    projectId: "facebook-clone-c8e80",
    storageBucket: "facebook-clone-c8e80.appspot.com",
    messagingSenderId: "1050297187868",
    appId: "1:1050297187868:web:95aabbecc834918cab29d9",
    measurementId: "G-MC2MCGNGE2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;