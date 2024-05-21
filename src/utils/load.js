import {apiUrl} from "./config";
import {callApi, GET, POST, PUT, DELETE} from "./fetch";
import {storeTokens} from "./token";

export const saveProfile = async (userId, profile, setErrorMessage) => {
    await PUT(`${apiUrl}/users/update-profile?id=${userId}`, profile)
        .then(response => {
            if (response.status === 500) {
                setErrorMessage("Hệ thống đang bảo trì, vui lòng thử lại sau.")
            } else if (response.status === 404) {
                setErrorMessage("Không tìm thấy mã người dùng.")
            } else if (response.status === 400) {
                setErrorMessage("Bạn không thể đổi email vì tài khoản này được tạo thông qua Google. Vui lòng đăng nhập bằng tài khoản Google.")
            } else {
                storeTokens(response.data.accessToken, response.data.refreshToken);
                window.location.href = "/profile";
            }
        });
}

export const loadProducts = async (page, size, setData) => {
    let url;
    if (page === null || size === null)
        url = `${apiUrl}/products`;
    else
        url = `${apiUrl}/products?page=${page}&size=${size}`;
    await GET(url)
        .then(response => {
            setData(response.data);
        });
};

export const loadUsers = async (page, size, setData) => {
    let url;
    if (page === null || size === null)
        url = `${apiUrl}/users`;
    else
        url = `${apiUrl}/users?page=${page}&size=${size}`;
    await GET(url)
        .then(response => {
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

export const saveCartItem = async (product) => {
    await POST(`${apiUrl}/cart-item`, product)
        .then(response => {
            //TODO
        })
}

export const getCartByUserId = async (setCarts, userId) => {
    await GET(`${apiUrl}/cart-item/search?id=${userId}`)
        .then(response => {
            setCarts(response.data.cartItems)
        })
}

export const deleteCartItem = async (userId, productId) => {
    await DELETE(`${apiUrl}/cart-item?userId=${userId}&productId=${productId}`)
}

export const deleteUser = async (userId) => {
    await DELETE(`${apiUrl}/users?id=${userId}`)
}