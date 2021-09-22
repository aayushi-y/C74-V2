import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCljj8Ghm-xvSKHMZSXCcWxCGOvpFrGwhQ",
    authDomain: "wily-app-7c758.firebaseapp.com",
    databaseURL: "https://wily-app-7c758.firebaseio.com",
    projectId: "wily-app-7c758",
    storageBucket: "wily-app-7c758.appspot.com",
    messagingSenderId: "487068390894",
    appId: "1:487068390894:web:7083f78e8f8b2f8dc32aff"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();