import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8B-j6oRxUagF15wzx6I7VxFnH3QewsoU",
    authDomain: "crwn-db-ac944.firebaseapp.com",
    databaseURL: "https://crwn-db-ac944.firebaseio.com",
    projectId: "crwn-db-ac944",
    storageBucket: "crwn-db-ac944.appspot.com",
    messagingSenderId: "652931151689",
    appId: "1:652931151689:web:3d98537588d51b58a14c98",
    measurementId: "G-31LZS64N4K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;