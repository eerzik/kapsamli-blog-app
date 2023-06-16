import{initializeApp} from 'firebase/app'
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBY_7A9MZeGJ_x68JQL3JGX_lVbzDQliWw",
    authDomain: "modern-react-app-af090.firebaseapp.com",
    projectId: "modern-react-app-af090",
    storageBucket: "modern-react-app-af090.appspot.com",
    messagingSenderId: "824161797109",
    appId: "1:824161797109:web:980c05f198cc63854996bc"
};

initializeApp(firebaseConfig)

const db=getFirestore();

export {db};