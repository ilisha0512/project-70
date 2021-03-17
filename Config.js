import * as firebase from "firebase"
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAASGCkm4_JKCsVgMBAv1Cn9uef4bUBCEE",
  authDomain: "willy-c608c.firebaseapp.com",
  projectId: "willy-c608c",
  storageBucket: "willy-c608c.appspot.com",
  messagingSenderId: "156979154596",
  appId: "1:156979154596:web:da6e548f46b51eee6b2031"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   export default firebase.firestore()