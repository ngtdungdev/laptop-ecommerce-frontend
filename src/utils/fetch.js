import {getAccessToken, getRefreshToken} from "./token";

export class ApiResponse {
    constructor({status, message, data}) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

export const GET = (url, body) => {
    return callApiWithAccessToken(url, "GET", body);
};

export const POST = (url, body) => {
    return callApiWithAccessToken(url, "POST", body);
};

export const PUT = (url, body) => {
    return callApiWithAccessToken(url, "PUT", body);
};

export const DELETE = (url, body) => {
    return callApiWithAccessToken(url, "DELETE", body);
};

export const callApiWithAccessToken = (url, method, body) => {
    const accessToken = getAccessToken();
    return callApiWithToken(url, method, body, accessToken);
};

export const callApiWithRefreshToken = (url, method, body) => {
    const refreshToken = getRefreshToken();
    return callApiWithToken(url, method, body, refreshToken);
};

export const callApiWithToken = (url, method, body, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    };
    return call(url, method, headers, body);
};

export const callApi = (url, method, body) => {
    const headers = {
        "Content-Type": "application/json"
    };
    return call(url, method, headers, body);
};

export const call = (url, method, headers, body) => {
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    })
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