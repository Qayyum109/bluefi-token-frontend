import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtoA0OBjvRdQm5dXRakoH7ZHX6IGD7TQA",
  authDomain: "bluefi-token.firebaseapp.com",
  projectId: "bluefi-token",
  storageBucket: "bluefi-token.appspot.com",
  messagingSenderId: "860017549868",
  appId: "1:860017549868:web:356135501957639d966789"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
