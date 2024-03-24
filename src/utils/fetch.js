import {getAccessToken, getRefreshToken, refreshNewTokens} from "./token";

export class ApiResponse {
    constructor({status, message, data}) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

export const GET = (url) => {
    return callApiWithAccessToken(url, "GET", undefined);
};

export const POST = (url, body) => {
    return callApiWithAccessToken(url, "POST", body);
};

export const PUT = (url, body) => {
    return callApiWithAccessToken(url, "PUT", body);
};

export const DELETE = (url) => {
    return callApiWithAccessToken(url, "DELETE", undefined);
};

export const callApiWithAccessToken = (url, method, body) => {
    const accessToken = getAccessToken();
    return callApiWithToken(url, method, body, accessToken)
        .then(response => {
            if (response.status === 401) {
                const success = refreshNewTokens();
                if (success) {
                    return callApiWithRefreshToken(url, method, body);
                } else {
                    console.log("call using refresh");
                    return new ApiResponse({
                        status: 401,
                        message: "Unauthorized",
                        data: null
                    });
                }
            }
            return response;
        });
};

export const callApiWithRefreshToken = (url, method, body) => {
    const refreshToken = getRefreshToken();
    return callApiWithToken(url, method, body, refreshToken);
};

export const callApiWithToken = (url, method, body, token) => {
    const extraHeaders = {
        "Authorization": `Bearer ${token}`,
    };
    return call(url, method, extraHeaders, body);
};

export const callApi = (url, method, body) => {
    return call(url, method, undefined, body);
};

export const call = (url, method, extraHeaders, body) => {
    const init = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            ...extraHeaders
        }
    };
    if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
        init.body = JSON.stringify(body);
    }
    return fetch(url, init)
        .then(response => response.json())
        .then(data => new ApiResponse(data))
        .catch(error => {
            console.error('Error calling API:', error);
            return new ApiResponse({
                status: 500,
                message: 'Internal Server Error',
                data: null
            });
        });
}
