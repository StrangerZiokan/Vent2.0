// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC9TjVhA5K38M6xaNYD8OZ1J5K9z4mEy6M",
    authDomain: "discord-clone-2cd63.firebaseapp.com",
    databaseURL: "https://discord-clone-2cd63.firebaseio.com",
    projectId: "discord-clone-2cd63",
    storageBucket: "discord-clone-2cd63.appspot.com",
    messagingSenderId: "670124367228",
    appId: "1:670124367228:web:a88d9db251cb0e39db18f9",
    measurementId: "G-SLSNEMP4W5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
