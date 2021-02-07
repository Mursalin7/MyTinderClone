import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDRwUvJ9DokxflpSo1iMatTnO8wt9KjtA",
    authDomain: "tinderclone-c021996.firebaseapp.com",
    projectId: "tinderclone-c021996",
    storageBucket: "tinderclone-c021996.appspot.com",
    messagingSenderId: "845094194035",
    appId: "1:845094194035:web:e7e9a89ddba8489a7e9306",
    measurementId: "G-QR1DZ3827J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;