import {useAuth} from "../../contexts/AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    // const navigate = useNavigate();
    // const {userLoggedIn} = useAuth();
    //
    // useEffect(() => {
    //     if (!userLoggedIn) {
    //         navigate("/login", {replace: true});
    //     }
    // }, [navigate, userLoggedIn]);

    return (
        <div>
            Home
        </div>
    );
};

export default Home;