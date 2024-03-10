import Cookies from "js-cookie";
import {apiUrl} from "./config";
import {callApiWithRefreshToken} from "./fetch";

export const storeTokens = (accessToken, refreshToken) => {
    Cookies.set("accessToken", accessToken, {expires: 2})
    Cookies.set("refreshToken", refreshToken, {expires: 2})
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

export const refreshNewTokens = () => {
    return callApiWithRefreshToken(
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
            window.location.href = "/login";
            return undefined;
        });
}

export const tryRefreshTokensAndRun = async ({functionCallback}) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (!accessToken || !refreshToken) {
        removeAllTokens();
        window.location.href = "/login";
    }
    await refreshNewTokens()
        .then(success => {
            if (success) {
                functionCallback();
            } else {
                removeAllTokens();
                window.location.href = "/login";
            }
        });
}
