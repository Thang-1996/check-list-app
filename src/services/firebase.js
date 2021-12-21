import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase, ref, set, onValue, update, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC2A2VjZw_7077PVYa92jabi5pg0QwcfBM",
    authDomain: "check-list-app-9b6de.firebaseapp.com",
    databaseURL: "https://check-list-app-9b6de-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "check-list-app-9b6de",
    storageBucket: "check-list-app-9b6de.appspot.com",
    messagingSenderId: "815466700910",
    appId: "1:815466700910:web:18633ab768acbc00db467f",
    measurementId: "G-4SK2J2BSY7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const database = getDatabase();
export const refDatabase = ref;
export const setDatabase = set;
export const getValue = onValue;
export const updateDoc = update;
export const removeDoc = remove;
export default firebase;