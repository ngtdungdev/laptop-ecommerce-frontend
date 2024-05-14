import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../../../contexts/AuthContext";
import {callApi} from "../../../../utils/fetch";
import {apiUrl} from "../../../../utils/config";
import classNames from "classnames/bind"
import {login, signInWithGoogle, signUp} from "../../../../utils/firebase/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import styles from "../../Login.module.scss";

const SignUp = () => {
    const cx = classNames.bind(styles)

    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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

    const onSignUp = async (e) => {
        e.preventDefault();
        try {
            if (isSigningUp || await checkEmailExists(e)) {
                setConfirmPassword("");
                return;
            }
            setIsSigningUp(true);
            if (confirmPassword !== password) {
                setErrorMessage("Mật khẩu xác nhận không trùng khớp.");
                setConfirmPassword("");
            } else {
                const signUpInfo = {
                    email: email,
                    password: password,
                    displayName: displayName,
                    phone: null,
                    avatar: null
                };
                await signUp(signUpInfo,
                    () => setErrorMessage("Hệ thống đang bảo trì, vui lòng thử lại sau."),
                    () => setErrorMessage("Không tìm thấy nhóm quyền."),
                    () => setErrorMessage("Email đã tồn tại.")
                );
            }
        } catch (error) {
            setErrorMessage("Vui lòng kiểm tra kết nối mạng.");
        }
        setIsSigningUp(false);
    };

    const checkEmailExists = async (e) => {
        e.preventDefault();
        let success = false;
        if (!isSigningUp && email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            await callApi(`${apiUrl}/auth/find-by-email`, "POST", email)
                .then(response => {
                    if (response.status === 200) {
                        setErrorMessage("Email đã tồn tại.")
                        success = true;
                    }
                })
        }
        return success;
    };

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
                            <h1 className={cx("ui-heading")}>Create a TechBeats account</h1>
                            <h3 className={cx("ui-subheading")}>One last step before starting your free trial.</h3>
                        </div>
                    </div>
                    <div className={cx("captcha-element")}></div>
                    <form className={cx("web_authn_form")}></form>
                    <div className={cx("account-lookup")}>
                        <div className={cx("combined-email")}>
                            <div className={cx("next-email")}>
                                <label className={cx("next-email-label")}>Email</label>
                                <div className={cx("next-input")}>
                                    <div className={cx("combined-input")}>
                                        <input
                                            className={cx("email")}
                                            type={"email"}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("combined-name")}>
                            <div className={cx("next-name")}>
                                <label className={cx("next-name-label")}>Name</label>
                                <div className={cx("next-input")}>
                                    <div className={cx("combined-input")}>
                                        <input
                                            className={cx("name")}
                                            type={"text"}
                                            value={displayName}
                                            onChange={(e) => setDisplayName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("combined-password")}>
                            <div className={cx("next-password")}>
                                <label className={cx("next-password-label")}>Password</label>
                                <div className={cx("next-input")}>
                                    <div className={cx("combined-input")}>
                                        <input
                                            className={cx("password")}
                                            type={"password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("combined-newPassword")}>
                            <div className={cx("next-newPassword")}>
                                <label className={cx("next-newPassword-label")}>Confirm new password</label>
                                <div className={cx("next-input")}>
                                    <div className={cx("combined-input")}>
                                        <input
                                            className={cx("newPassword")}
                                            type={"password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("combined-error-message")}>
                            <p>{errorMessage}</p>
                        </div>
                        <div className={cx("button-login-container")}>
                            <button className={cx("ui-button")} style={{ opacity: 0 }} onClick={e => onSignUp(e)}>
                            <span className={cx("content")}>
                                <span className={cx("ui-button-text")}>Create TechBeats account</span>
                                <span className={cx("ui-button-hover-icon")}>
                                    <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                                </span>
                            </span>
                            </button>
                        </div>
                    </div>
                    <p className={cx("help-link","help-link-signIn")}>
                        <span className={cx("help-link-text")}>Already have a TechBeats account?</span>
                        <Link className={cx("ui-arrow-link")} to={"/login"}>
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