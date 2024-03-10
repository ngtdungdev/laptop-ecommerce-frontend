import React, {useContext, useEffect, useState} from "react";
import {POST} from "../../utils/fetch";
import {apiUrl} from "../../utils/config";
import {tryRefreshTokensAndRun} from "../../utils/token";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (currentUser === null) {
                await loadUser()
            }
        };
        fetchData();
    }, [currentUser]);

    const loadUser = async () => {
        const user = await POST(`${apiUrl}/auth/get-user`, null)
            .then(response => {
                if (response.status === 401)
                    tryRefreshTokensAndRun(loadUser);
                if (response.status === 200)
                    return response.data;
                return null;
            });
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    };

    const value = {
        currentUser,
        userLoggedIn,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};