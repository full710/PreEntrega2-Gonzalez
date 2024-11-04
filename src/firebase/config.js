import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
        apiKey: "AIzaSyB-O5iK9bY0-KctjAcwNDxtc1FGqoMCD4k",
        authDomain: "somostrailer.firebaseapp.com",
        projectId: "somostrailer",
        storageBucket: "somostrailer.firebasestorage.app",
        messagingSenderId: "214906081684",
        appId: "1:214906081684:web:0385b7f7fd72724a9c3f81"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)