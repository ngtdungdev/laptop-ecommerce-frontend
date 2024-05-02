import {useEffect, useState, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles  from "./Login.module.scss"
import classNames from "classnames/bind"
import logo from "../../assets/images/logoWeb.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FcGoogle } from "react-icons/fc";
import {useAuth} from "../../contexts/AuthContext";
import {login, signInWithGoogle, signUp} from "../../utils/firebase/auth";
import SignUp from "../SignUp";
import SignIn from "./Components/SignIn";
import Import from "../Admin/Invoice/Import";
import HistoryImport from "../Admin/Invoice/HistoryImport";
import Supplier from "../Admin/Invoice/Supplier";

const Login = ({active}) => {
    const navigate = useNavigate();
    const {userLoggedIn} = useAuth();
    const [isSignIn, setIsSignIn] = useState(active);
    const optionPanels = {
        0: Import,
        1: HistoryImport,
        2: Supplier,
    };
    const renderPanels = () => {
        const SelectedDialog = optionPanels[clickButton];
        return SelectedDialog ? <SelectedDialog/> : null;
    };
    const handleIsSign = () => {
        setIsSignIn((prevSign) => !prevSign);
    }
    const cx = classNames.bind(styles)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (userLoggedIn) {
            navigate("/", {replace: true});
        }
    }, [navigate, userLoggedIn]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (isLoggingIn)
            return;
        setIsLoggingIn(true);
        await login({
                email: email,
                password: password
            },
            () => setErrorMessage("Hệ thống đang bảo trì, vui lòng thử lại sau."),
            () => setErrorMessage("Tài khoản hoặc mật khẩu không hợp lệ.")
        );
        setIsLoggingIn(false);
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (isLoggingIn)
            return;
        setIsLoggingIn(true);
        try {
            const user = await signInWithGoogle();
            await login(user,
                () => setErrorMessage("Hệ thống đang bảo trì, vui lòng thử lại sau."),
                () => signUp(user)
            );
        } catch (error) {
            setErrorMessage("Vui lòng kiểm tra kết nối mạng.");
        }
        setIsLoggingIn(false);
    };

    return (
        <div className={cx("page-container")}>
            <div className={cx("gradient-background-wrapper")}>
                <div className={cx("gradient-background")}>
                    <div className={cx("gradient-background-left")}></div>
                    <div className={cx("gradient-background-right")}></div>
                </div>
                <div className={cx("gradient-background-noise")}></div>
            </div>
            <div className={cx("main-page")}>
                <div className={cx("page-content")}>
                <div className={cx("main-content")}>
                    <div className={cx("cart")}>
                        <div className={cx("cart-helder")}>
                            <h1 className={cx("cart-logo")}>
                                <header className={cx("loginCart-helder")}>
                                    <Link to={"/login"}>
                                        <img src={logo} alt={""}/>
                                    </Link>
                                </header>
                            </h1>
                        </div>
                        {
                            isSignIn ?
                                <SignIn OnClickSignUp={handleIsSign} />
                                :
                                <SignUp OnClickSignIn={handleIsSign} />
                        }
                    </div>
                    <footer className={cx("footer")}>
                        <div className={cx("footer-link")}>
                            <Link to={"/login"} className={cx("link")}>Help</Link>
                            <Link to={"/login"} className={cx("link")}>Privacy</Link>
                            <Link to={"/login"} className={cx("link")}>Terms</Link>
                        </div>
                    </footer>
                    </div>
                </div>
            </div>
            {/*<form onSubmit={onSubmit}>*/}
            {/*    <label htmlFor={"text-email-login"}>*/}
            {/*        Email:*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        id={"text-email-login"}*/}
            {/*        type={"email"}*/}
            {/*        autoComplete={"email"}*/}
            {/*        required={true}*/}
            {/*        value={email}*/}
            {/*        onChange={(e) => {*/}
            {/*            setEmail(e.target.value);*/}
            {/*            setErrorMessage("");*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <br/>*/}
            {/*    <label htmlFor={"text-password-login"}>*/}
            {/*        Password:*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        id={"text-password-login"}*/}
            {/*        type={"password"}*/}
            {/*        autoComplete={"current-password"}*/}
            {/*        required={true}*/}
            {/*        value={password}*/}
            {/*        onChange={e => {*/}
            {/*            setPassword(e.target.value);*/}
            {/*            setErrorMessage("");*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <br/>*/}
            {/*    {errorMessage && (*/}
            {/*        <span>{errorMessage}</span>*/}
            {/*    )}*/}
            {/*    <br/>*/}
            {/*    <button*/}
            {/*        type={"submit"}*/}
            {/*        disabled={isLoggingIn}*/}
            {/*    >*/}
            {/*        {isLoggingIn ? "Logging in..." : "Login"}*/}
            {/*    </button>*/}
            {/*</form>*/}

            {/*<p>Don't have an account? <Link to={"/signup"}>Sign up</Link></p>*/}

            {/*<button*/}
            {/*    disabled={isLoggingIn}*/}
            {/*    onClick={e => onGoogleSignIn(e)}*/}
            {/*>*/}
            {/*    {isLoggingIn ? "Logging in..." : "Continue with Google"}*/}
            {/*</button>*/}
        </div>
    );
};


export default Login;