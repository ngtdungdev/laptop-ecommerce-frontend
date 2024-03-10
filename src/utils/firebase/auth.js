import {app} from "./firebase";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return {
        email: user.email,
        password: user.uid,
        displayName: user.displayName,
        phone: user.phoneNumber,
        avatar: user.photoURL
    };
};