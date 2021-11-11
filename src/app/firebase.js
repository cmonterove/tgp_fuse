import firebase from "firebase"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyA_pdzlVCMpDuppHRRNntSPrx7afWIdan8",
    authDomain: "tpgapp-b5f15.firebaseapp.com",
    projectId: "tpgapp-b5f15",
    storageBucket: "tpgapp-b5f15.appspot.com",
    messagingSenderId: "491994965627",
    appId: "1:491994965627:web:d81455d1efa41bbab164de",
    measurementId: "G-VY6B5MW1WQ"
})

const db = app.firestore();
export { db };
export const auth = app.auth()
export default app
