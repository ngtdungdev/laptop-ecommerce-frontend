import "./App.css";
import {useState} from "react";
import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {useAuth} from "./contexts/AuthContext";
import FullLayout from "./layouts/FullLayout";
import HeaderLayout from "./layouts/HeaderLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import AboutUs from "./pages/AboutUs";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

const App = () => {
    const {currentUser} = useAuth();
    const allRoutes = [
        {path: "*", element: <Navigate to={"/"}/>},
        {path: "/", element: <FullLayout element={Home}/>},
        {path: "/shop", element: <FullLayout element={Shop}/>},
        {path: "/cart", element: <FullLayout element={Cart}/>},
        {path: "/orders", element: <FullLayout element={Orders}/>},
        {path: "/header", element: <Header/>},
        {path: "/footer", element: <Footer/>},
        {path: "/about-us", element: <FullLayout element={AboutUs}/>},
        {path: "/payment", element: <FullLayout element={Payment}/>, permissions: []},
        {path: "/profile", element: <FullLayout element={Profile}/>, permissions: []},
        {path: "/login", element: <Login/>},
        {path: "/signup", element: <Login/>},
        {path: "/forgot-password", element: <Login/>},
        {path: "/forgot-password/pin", element: <Login/>},
        {path: "/forgot-password/email", element: <Login/>},
        {path: "/forgot-password/reset-password", element: <Login/>},
        {path: "/admin/*", element: <Navigate to={"/admin"}/>, permissions: []},
        {path: "/admin", element: <HeaderLayout element={Admin}/>},
        {
            path: "/admin/statistics", element: <HeaderLayout element={Admin}/>,
            permissions: [
                // TODO
            ]
        },
        {
            path: "/admin/products", element: <HeaderLayout element={Admin}/>,
            permissions: [
                "CREATE_PRODUCT", "READ_PRODUCT", "UPDATE_PRODUCT", "DELETE_PRODUCT",
            ]
        },
        {
            path: "/admin/categories", element: <HeaderLayout element={Admin}/>,
            permissions: [
                "CREATE_CATEGORY", "READ_CATEGORY", "UPDATE_CATEGORY", "DELETE_CATEGORY",
            ]
        },
        {
            path: "/admin/orders", element: <HeaderLayout element={Admin}/>,
            permissions: [
                "CREATE_ORDER", "READ_ORDER", "UPDATE_ORDER", "DELETE_ORDER",
                "CREATE_ORDER_DETAIL", "READ_ORDER_DETAIL", "UPDATE_ORDER_DETAIL", "DELETE_ORDER_DETAIL",
            ]
        },
        {
            path: "/admin/warehouse", element: <HeaderLayout element={Admin}/>,
            permissions: [
                // TODO
            ]
        },
        {
            path: "/admin/users", element: <HeaderLayout element={Admin}/>,
            permissions: [
                "CREATE_USER", "READ_USER", "UPDATE_USER", "DELETE_USER",
            ]
        },
        {
            path: "/admin/roles", element: <HeaderLayout element={Admin}/>,
            permissions: [
                "CREATE_ROLE", "READ_ROLE", "UPDATE_ROLE", "DELETE_ROLE",
            ]
        },
    ];

    const availableRoutes = allRoutes.map(route => {
        if (!route.permissions) // public
            return <Route key={route.path} path={route.path} element={route.element}/>;
        if (!currentUser) // private but not logged in
            return undefined;
        if (route.permissions.length === 0) // no permissions needed, just logged in
            return <Route key={route.path} path={route.path} element={route.element}/>;
        // need to check if the user has the permission
        const permissions: Array<string> = route.permissions;
        const authorities: Array<string> = currentUser.authorities;
        let hasPermission = false;
        for (let i = 0; i < authorities.length; i++) {
            const permission = permissions.find(p => p === authorities[i]);
            if (permission) { // found
                hasPermission = true;
                break;
            }
        }
        if (hasPermission)
            return <Route key={route.path} path={route.path} element={route.element}/>;
        return undefined;
    });

    return (
        <Router>
            <Routes>
                {availableRoutes.map(route => route)}
            </Routes>
        </Router>
    );
}

export default App;
