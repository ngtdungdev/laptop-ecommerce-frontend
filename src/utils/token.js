import Cookies from "js-cookie";
import {apiUrl} from "./config";
import {callApiWithRefreshToken} from "./fetch";

export const storeTokens = (accessToken, refreshToken) => {
    const expiration = process.env.REACT_APP_COOKIE_EXPIRATION / (24 * 60 * 60); // seconds to days
    Cookies.set("accessToken", accessToken, {expires: expiration});
    Cookies.set("refreshToken", refreshToken, {expires: expiration});
}

export const getAccessToken = () => {
    const accessToken = Cookies.get("accessToken");
    return accessToken ? accessToken : null;
}

export const getRefreshToken = () => {
    const refreshToken = Cookies.get("refreshToken");
    return refreshToken ? refreshToken : null;
}

export const removeAllTokens = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
}

export const refreshNewTokens = async () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (!accessToken || !refreshToken) {
        removeAllTokens();
        return false;
    }
    return await callApiWithRefreshToken(
        `${apiUrl}/auth/refresh-token`,
        "POST",
        null
    )
        .then(response => {
            if (!response)
                return false;
            storeTokens(response.data.accessToken, response.data.refreshToken);
            return true;
        })
        .catch(error => {
            removeAllTokens();
            return false;
        });
}

// export const tryRefreshTokensAndRun = async (functionCallback) => {
//     const response = await refreshNewTokens()
//         .then(success => {
//             if (success) {
//                 return functionCallback();
//             } else {
//                 removeAllTokens();
//                 return null;
//             }
//         });
//     return response ? response : null;
// }
