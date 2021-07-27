import firebase from 'firebase'
require("@firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyC1s3LfuNazkJaOIk1pmYbAREDojTqan-8",
  authDomain: "zoogle-ca4d2.firebaseapp.com",
  projectId: "zoogle-ca4d2",
  storageBucket: "zoogle-ca4d2.appspot.com",
  messagingSenderId: "391799483717",
  appId: "1:391799483717:web:381a9d2957539e5b54a22c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   