import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {callApi} from "../../utils/fetch";
import {apiUrl} from "../../utils/config";
import classNames from "classnames/bind"
import {login, signInWithGoogle, signUp} from "../../utils/firebase/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import styles from "../Login/Login.module.scss";

const SignUp = ({OnClickSignIn}) => {
    const navigate = useNavigate();
    const {userLoggedIn} = useAuth();
    const cx = classNames.bind(styles)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const elements = [
                document.querySelector(".next-email"),
                document.querySelector(".next-name"),
                document.querySelector(".next-password"),
                document.querySelector(".next-newPassword"),
                document.querySelector(".ui-button"),
                document.querySelector(".ui-button-google"),
            ];

            elements.forEach((element) => {
                if (element) {
                    element.style.animationDelay = "0s";
                }
            });
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const checkEmailExists = async (e) => {
        e.preventDefault();
        if (!isSigningUp && email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            await callApi(
                `${apiUrl}/auth/find-by-email`,
                "POST",
                email
            )
                .then(response => {
                    if (response.status === 200) {
                        setErrorMessage("Email đã tồn tại.")
                    }
                })
        }
    }


    const onGoogleSignUp = async (e) => {
        e.preventDefault();
        if (isSigningUp)
            return;
        setIsSigningUp(true);
        try {
            const user = await signInWithGoogle();
            await signUp(user,
                () => setErrorMessage("Hệ thống đang bảo trì, vui lòng thử lại sau."),
                () => setErrorMessage("Không tìm thấy nhóm quyền."),
                () => login(user)
            );
        } catch (error) {
            setErrorMessage("Vui lòng kiểm tra kết nối mạng.");
        }
        setIsSigningUp(false);
    };


    return (
        <div>
            <div className={cx("login-cart-content")}>
                <div className={cx("main-cart-section")}>
                    <div className={cx("headings-container")}>
                        <div>
                            <h1 className={cx("ui-heading")}>Create a LapTop account</h1>
                            <h3 className={cx("ui-subheading")}>One last step before starting your free trial.</h3>
                        </div>
                    </div>
                    <div className={cx("captcha-element")}></div>
                    <form className={cx("web_authn_form")}></form>
                    <form className={cx("account-lookup")} >
                        <div className={cx("combined-email")}>
                            <div className={cx("next-email")}>
                                <label className={cx("next-email-label")}>Email</label>
                                <div className={cx("next-input")}>
                                    <div className={cx("combined-input")}>
                                        <input className={cx("email")} type={"email"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("combined-name")}>
                            <div className={cx("next-name")}>
                                <label className={cx("next-name-label")}>Name</label>
                                <div className={cx("next-input")}>
                                    <div className={cx("combined-input")}>
                                        <input className={cx("name")}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("section-help-text")}>
                            <p className={cx("next-text-help-text")}>
                                Enter your first and last name as they appear on your government-issued ID.
                            </p>
                        </div>
                        <div className={cx("combined-password")}>
                            <div className={cx("next-password")}>
                                <label className={cx("next-password-label")}>Password</label>
                                <div className={cx("next-input")}>
                                    <div className={cx("combined-input")}>
                                        <input className={cx("password")} type={"password"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("combined-newPassword")}>
                            <div className={cx("next-newPassword")}>
                                <label className={cx("next-newPassword-label")}>Confirm new password</label>
                                <div className={cx("next-input")}>
                                    <div className={cx("combined-input")}>
                                        <input className={cx("newPassword")} type={"password"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("button-login-container")}>
                            <button className={cx("ui-button")} style={{ opacity: 0 }}>
                            <span className={cx("content")}>
                                <span className={cx("ui-button-text")}>Create Laptop account</span>
                                <span className={cx("ui-button-hover-icon")}>
                                    <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                                </span>
                            </span>
                            </button>
                        </div>
                    </form>
                    <p className={cx("help-link","help-link-signIn")}>
                        <span className={cx("help-link-text")}>Already have a Shopify account?</span>
                        <Link className={cx("ui-arrow-link")} to={"/login"} onClick={OnClickSignIn}>
                        Login
                            <span className={cx("arrow-link-icon")}>
                            <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                        </span>
                        </Link>
                    </p>
                </div>
            </div>
            {/*<form onSubmit={onSubmit}>*/}
            {/*    <label htmlFor={"text-name-signup"}>*/}
            {/*        Name:*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        id={"text-name-signup"}*/}
            {/*        type={"text"}*/}
            {/*        autoComplete={"name"}*/}
            {/*        required={true}*/}
            {/*        value={name}*/}
            {/*        onChange={(e) => {*/}
            {/*            setName(e.target.value);*/}
            {/*            setErrorMessage("");*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <br/>*/}
            {/*    <label htmlFor={"text-email-signup"}>*/}
            {/*        Email:*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        id={"text-email-signup"}*/}
            {/*        type={"email"}*/}
            {/*        autoComplete={"email"}*/}
            {/*        required={true}*/}
            {/*        value={email}*/}
            {/*        onChange={(e) => {*/}
            {/*            setEmail(e.target.value);*/}
            {/*            setErrorMessage("");*/}
            {/*        }}*/}
            {/*        onBlur={checkEmailExists}*/}
            {/*    />*/}
            {/*    <br/>*/}
            {/*    <label htmlFor={"text-password-signup"}>*/}
            {/*        Password:*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        id={"text-password-signup"}*/}
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
            {/*        disabled={isSigningUp}*/}
            {/*    >*/}
            {/*        {isSigningUp ? "Signing up..." : "Sign up"}*/}
            {/*    </button>*/}
            {/*</form>*/}

            {/*<p>Already have an account? <Link to={"/login"}>Login</Link></p>*/}

            {/*<button*/}
            {/*    disabled={isSigningUp}*/}
            {/*    onClick={e => onGoogleSignUp(e)}*/}
            {/*>*/}
            {/*    {isSigningUp ? "Signing in..." : "Continue with Google"}*/}
            {/*</button>*/}
        </div>
    );
};

export default SignUp;