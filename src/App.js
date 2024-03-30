import "./App.css";
import {useState} from "react";
import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {useAuth} from "./contexts/AuthContext";
import FullLayout from "./layouts/FullLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import AboutUs from "./pages/AboutUs";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin/index.js";
import Order from "./pages/Admin/Order";
import Support from "./pages/Admin/Support";
import Product from "./pages/Admin/Product";
import Category from "./pages/Admin/Category";
import Warehouse from "./pages/Admin/Warehouse";
import User from "./pages/Admin/User";
import Role from "./pages/Admin/Role";
import Statistics from "./pages/Admin/Statistics";

const App = () => {
    const {currentUser} = useAuth();
    const [isActive, setIsActive] = useState(true);
    const allRoutes = [
        {path: "*", element: <Navigate to={"/"}/>},
        {path: "/", element: <FullLayout element={Home}/>},
        {path: "/shop", element: <FullLayout element={Shop}/>},
        {path: "/cart", element: <FullLayout element={Cart}/>},
        {path: "/orders", element: <FullLayout element={Orders}/>},
        {path: "/about-us", element: <FullLayout element={AboutUs}/>},
        {path: "/payment", element: <FullLayout element={Payment}/>, permissions: []},
        {path: "/profile", element: <FullLayout element={Profile}/>, permissions: []},
        {path: "/login", element: <Login active={isActive}/>},
        {path: "/signup", element: <Login active={!isActive}/>},
        {path: "/forgot-password", element: <ForgotPassword/>},
        {path: "/admin/*", element: <Navigate to={"/admin"}/>, permissions: []},
        {path: "/admin", element: <FullLayout element={Admin}/>, permissions: []},
        {
            path: "/admin/orders", element: <Order/>,
            permissions: [
                "CREATE_ORDER", "READ_ORDER", "UPDATE_ORDER", "DELETE_ORDER",
                "CREATE_ORDER_DETAIL", "READ_ORDER_DETAIL", "UPDATE_ORDER_DETAIL", "DELETE_ORDER_DETAIL",
            ]
        },
        {
            path: "/admin/support", element: <Support/>,
            permissions: [
                // TODO
            ]
        },
        {
            path: "/admin/products", element: <Product/>,
            permissions: [
                "CREATE_PRODUCT", "READ_PRODUCT", "UPDATE_PRODUCT", "DELETE_PRODUCT",
            ]
        },
        {
            path: "/admin/categories", element: <Category/>,
            permissions: [
                "CREATE_CATEGORY", "READ_CATEGORY", "UPDATE_CATEGORY", "DELETE_CATEGORY",
            ]
        },
        {
            path: "/admin/warehouse", element: <Warehouse/>,
            permissions: [
                // TODO
            ]
        },
        {
            path: "/admin/users", element: <User/>,
            permissions: [
                "CREATE_USER", "READ_USER", "UPDATE_USER", "DELETE_USER",
            ]
        },
        {
            path: "/admin/roles", element: <Role/>,
            permissions: [
                "CREATE_ROLE", "READ_ROLE", "UPDATE_ROLE", "DELETE_ROLE",
            ]
        },
        {
            path: "/admin/statistics", element: <Statistics/>,
            permissions: [
                // TODO
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
