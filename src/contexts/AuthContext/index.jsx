import React, {useContext, useEffect, useState} from "react";
import {POST} from "../../utils/fetch";
import {apiUrl} from "../../utils/config";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            setLoading(true);
            const user = await POST(`${apiUrl}/auth/get-profile`, null)
                .then(response => {
                    if (response.status === 200) {
                        console.log(response);
                        return response.data;
                    }
                    return null;
                });
            if (user) {
                setCurrentUser({...user});
                setUserLoggedIn(true);
                setIsAdmin(checkAdmin(user));
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
            setLoading(false);
        };

        if (currentUser === null) {
            loadUser().then();
        }
    }, [currentUser]);

    const checkAdmin = (user) => {
        for (let i = 0; i < user.roles.length - 1; i++) {
            if (user.roles[i] === "ADMIN") return true;
        }
        return false
    };

    const value = {
        currentUser,
        userLoggedIn,
        isAdmin,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};