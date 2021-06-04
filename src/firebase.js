import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDeV-wsO8ZGKJ_87EK-xbQARdckV23H3k8",
    authDomain: "reacttododb-barbara.firebaseapp.com",
    databaseURL: "https://reacttododb-barbara-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reacttododb-barbara",
    storageBucket: "reacttododb-barbara.appspot.com",
    messagingSenderId: "857184921605",
    appId: "1:857184921605:web:1920e2528d59ccc944146c",
    measurementId: "G-BJBPHG91YH"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

  export default firebase