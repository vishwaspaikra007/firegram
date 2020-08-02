import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBTmB15sup2AhRUtmxGI0GnuT4jp9kmeBQ",
    authDomain: "firegram-25ccb.firebaseapp.com",
    databaseURL: "https://firegram-25ccb.firebaseio.com",
    projectId: "firegram-25ccb",
    storageBucket: "firegram-25ccb.appspot.com",
    messagingSenderId: "587386277857",
    appId: "1:587386277857:web:9efda009d2d524bbc48ca0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFirestore, timestamp}