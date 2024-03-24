import {useEffect, useState, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles  from "./Login.module.scss"
import classNames from "classnames/bind"
import logo from "../../assets/images/logo.jpg"
import {useAuth} from "../../contexts/AuthContext";
import {login, signInWithGoogle, signUp} from "../../utils/firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const {userLoggedIn} = useAuth();


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
                        <div className={cx("login-cart")}>
                            <div className={cx("login-cart-helder")}>
                                <h1 className={cx("login-cart-logo")}>
                                    <header className={cx("loginCart-helder")}>
                                        <Link to={"\"/signup"}>
                                            <img src={logo} alt={""}/>
                                        </Link>
                                    </header>
                                    LapTop
                                </h1>
                            </div>
                            <div className={cx("login-cart-content")}>
                                <div className={cx("main-cart-section")}>
                                    <div className={cx("headings-container")}>
                                        <div>
                                            <h1 className={cx("ui-heading")}>Log in</h1>
                                            <h3 className={cx("ui-subheading")}>Continue to Laptop account</h3>
                                        </div>
                                    </div>
                                    <div className={cx("captcha-element")}></div>
                                    <form className={cx("web_authn_form")}></form>
                                    <form className={cx("account-lookup")}>
                                        <div className={cx("combined-email")}>
                                            <div className={cx("next-email")}>
                                                <label className={cx("next-email-label")}>Email</label>
                                                <div className={cx("next-input")} >
                                                    <div className={cx("combined-input")}>
                                                        <input className={cx("email")}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className={cx("external-login-divider-container")}>
                                        <div className={cx("external-login-divider")}>

                                        </div>
                                    </div>
                                    <div className={cx("external-login-providers")}>

                                    </div>
                                    <p className={cx("help-link")}>
                                        <span className={cx("help-link-text")}></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <footer className={cx("login-footer")}>
                            <div className={cx("login-footer-link")}></div>
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