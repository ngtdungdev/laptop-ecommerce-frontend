import {apiUrl} from "./config";
import {storeTokens} from "./token";
import {GET} from "./fetch";

export const loadProducts = async (page, size, setData) => {
    await GET(`${apiUrl}/products?page=${page}&size=${size}`)
        .then(response => {
            setData(response.data)
        });
};