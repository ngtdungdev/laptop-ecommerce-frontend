import {apiUrl} from "./config";
import {callApi, GET, POST, PUT, DELETE} from "./fetch";

export const loadProducts = async (page, size, setData) => {
    let url;
    if (page === null || size === null)
        url = `${apiUrl}/public/products`;
    else
        url = `${apiUrl}/public/products?page=${page}&size=${size}`;
    await callApi(url, "GET", null)
        .then(response => {
            console.log(response);
            setData(response.data);
        });
};

export const loadCategories = async (setListCategory) => {
    await callApi(`${apiUrl}/public/categories`, "GET", undefined)
        .then(response => {
            setListCategory(response.data);
        });
};

export const findProducts = async (setData, searchProducts) => {
    await callApi(`${apiUrl}/public/products/search`, "POST", searchProducts)
        .then(response => {
            setData(response.data);
        });
};

