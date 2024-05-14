import {app} from "./firebase";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {callApi} from "../fetch";
import {apiUrl} from "../config";
import {removeAllTokens, storeTokens} from "../token";

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

export const login = async (loginInfo, handleStatus500, handleStatus400) => {
    const {email, password} = loginInfo;
    await callApi(`${apiUrl}/auth/login`, "POST", {email, password})
        .then(response => {
            if (response.status === 500) {
                handleStatus500();
            } else if (response.status === 400) {
                handleStatus400();
            } else {
                storeTokens(response.data.accessToken, response.data.refreshToken);
                window.location.href = "/";
            }
        });
};

export const signUp = async (signUpInfo, handleStatus500, handleStatus404, handleStatus400) => {
    console.log(signUpInfo)
    await callApi(`${apiUrl}/auth/signup`, "POST", {...signUpInfo})
        .then(response => {
            if (response.status === 500) {
                handleStatus500();
            } else if (response.status === 404) {
                handleStatus404();
            } else if (response.status === 400) {
                handleStatus400();
            } else {
                storeTokens(response.data.accessToken, response.data.refreshToken);
                window.location.href = "/";
            }
        });
};

export const logout = async () => {
    console.log('Logging out');
    removeAllTokens();
    console.log('Logged out');
    window.location.href = "/login";
}
