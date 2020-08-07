import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAK8HhJdvlWDJRKR_As5ZT1E0yOExCLR-Q",
    authDomain: "tik-tok-clone-7edae.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-7edae.firebaseio.com",
    projectId: "tik-tok-clone-7edae",
    storageBucket: "tik-tok-clone-7edae.appspot.com",
    messagingSenderId: "62825852302",
    appId: "1:62825852302:web:83f4dbd49c569363e088df"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;