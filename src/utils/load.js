import {apiUrl} from "./config";
import {storeTokens} from "./token";
import {GET, POST} from "./fetch";

export const loadProducts = async (page, size, setData) => {
    await GET(`${apiUrl}/products?page=${page}&size=${size}`)
        .then(response => {
            setData(response.data)
        });
};

export const loadCategories = async (setListCategory) => {
    await GET(`${apiUrl}/categories`)
        .then(response => {
            setListCategory(response.data);
        });
};

export const findProducts = async (setData, searchProducts) => {
    await POST(`${apiUrl}/products`, {searchProducts})
        .then(response => {
            setData(response.data);
        });
};

