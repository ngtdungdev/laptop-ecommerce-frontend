import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {removeAllTokens} from "../../utils/token";
import {useEffect, useState} from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const {userLoggedIn, currentUser} = useAuth();

    const [isScrolled, setIsScrolled] = useState(false);

    const items = [
        {title: "Home", link: "/"},
        {title: "Shop", link: "/shop"},
        {title: "Cart", link: "/cart"},
        {title: "My orders", link: "/orders"},
        {title: "About us", link: "/about-us"},
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, []);

    const doSignOut = () => {
        removeAllTokens();
        window.location.href = "/";
    };

    return <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className={"navbar-content"}>
            <div className={"navbar-left"}>
                <ul className={"navbar-links"}>
                    {items.map((item, index) =>
                        <li key={index}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className={"navbar-right"}>
                {userLoggedIn
                        ?
                        <>
                            <button onClick={doSignOut}>Sign out</button>
                        </>
                        :
                        <>
                            <Link to={"/login"}>Login</Link>
                            <Link to={"/signup"}>Sign up</Link>
                        </>
                }
            </div>
        </div>
    </nav>;
};

export default Navbar;