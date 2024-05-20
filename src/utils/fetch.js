import {getAccessToken, getRefreshToken, refreshNewTokens} from "./token";

export class ApiResponse {
    constructor({status, message, data}) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

export const GET = async (url) => {
    return await callApiWithAccessToken(url, "GET", undefined);
};

export const POST = async (url, body) => {
    return await callApiWithAccessToken(url, "POST", body);
};

export const PUT = async (url, body) => {
    return await callApiWithAccessToken(url, "PUT", body);
};

export const DELETE = async (url) => {
    return await callApiWithAccessToken(url, "DELETE", undefined);
};

export const callApiWithAccessToken = async (url, method, body) => {
    const accessToken = getAccessToken();
    return await callApiWithToken(url, method, body, accessToken)
        .then(async (response) => {
            if (!response.status || response.status === 401) {
                return await refreshNewTokens().then(success => {
                    if (success) {
                        console.log("call using refresh");
                        return callApiWithRefreshToken(url, method, body);
                    } else {
                        return new ApiResponse({
                            status: 401,
                            message: "Unauthorized",
                            data: null
                        });
                    }
                });
            }
            return response;
        })
        .then(response => response);
};

export const callApiWithRefreshToken = async (url, method, body) => {
    const refreshToken = getRefreshToken();
    return await callApiWithToken(url, method, body, refreshToken);
};

export const callApiWithToken = async (url, method, body, token) => {
    const extraHeaders = {
        "Authorization": `Bearer ${token}`,
    };
    return await call(url, method, extraHeaders, body);
};

export const callApi = async (url, method, body) => {
    return await call(url, method, undefined, body);
};

export const call = async (url, method, extraHeaders, body) => {
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
    return await fetch(url, init)
        .catch(error => console.log(error))
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
