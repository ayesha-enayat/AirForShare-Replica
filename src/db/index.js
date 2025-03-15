import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getDatabase,
    ref,
    set,
    onValue,
    remove
} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAKqyHBaL2DXgfs9iQPGYN0hauKk64G9rw",
    authDomain: "airforshare-replica.firebaseapp.com",
    projectId: "airforshare-replica",
    storageBucket: "airforshare-replica.firebasestorage.app",
    messagingSenderId: "612085900282",
    appId: "1:612085900282:web:43197dd7c9280f0dd7ba43",
    measurementId: "G-HL2T6XJCCE",
    databaseURL: "https://airforshare-replica-default-rtdb.asia-southeast1.firebasedatabase.app/"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

export {
    app,
    database,
    ref,
    set,
    onValue,
    remove
}