import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDV9K0MM2KvyRV6aFuoXWSNx43VWyCtIXs",
  authDomain: "complaint-forum-d2e10.firebaseapp.com",
  projectId: "complaint-forum-d2e10",
  storageBucket: "complaint-forum-d2e10.appspot.com",
  messagingSenderId: "644112026295",
  appId: "1:644112026295:web:5ce789beb40c71ffbe5b32"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

