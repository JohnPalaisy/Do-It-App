import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
const config = {
  apiKey: "AIzaSyC0PhGij85WA_bzKODy_sAVG7UrgiAkOy0",
  authDomain: "do-it-d6db7.firebaseapp.com",
  databaseURL: "https://do-it-d6db7.firebaseio.com",
  projectId: "do-it-d6db7",
  storageBucket: "do-it-d6db7.appspot.com",
  messagingSenderId: "427874631719"
}
firebase.initializeApp(config)
firebase.firestore().settings({})

export default firebase 