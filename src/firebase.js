import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore,  } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwN57P_n7S-kUfG54KnMZFqc2jQg6MCns",
  authDomain: "netflix-vite-2fc79.firebaseapp.com",
  projectId: "netflix-vite-2fc79",
  storageBucket: "netflix-vite-2fc79.firebasestorage.app",
  messagingSenderId: "424847762256",
  appId: "1:424847762256:web:53088da717e09fa7f90255"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=> {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        });
    } catch (err) {
        console.log(err);
        alert(err);
    }
};

const signin = async (email, password)=> {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.log(err);
        alert(err);
    }
};

const signout = () => {
    signOut(auth);
};

export { auth, db, signup, signin, signout };