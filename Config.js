import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDBlxAIErYuROhgVquXadEmh-wrE2R1rys",
    authDomain: "delish-app-9fb47.firebaseapp.com",
    projectId: "delish-app-9fb47",
    storageBucket: "delish-app-9fb47.appspot.com",
    messagingSenderId: "600264589104",
    appId: "1:600264589104:web:0da355b93a59dca729d2f5"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();