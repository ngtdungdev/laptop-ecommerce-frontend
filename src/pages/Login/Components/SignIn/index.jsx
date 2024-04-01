import {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles  from "../../Login.module.scss"
import classNames from "classnames/bind"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FcGoogle } from "react-icons/fc";
import {login, signInWithGoogle, signUp} from "../../../../utils/firebase/auth";

const SignIn = ({OnClickSignUp}) => {
    const cx = classNames.bind(styles)
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
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
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     const elements = [
        //         document.querySelector(".next-email"),
        //         document.querySelector(".next-password"),
        //         document.querySelector(".ui-button"),
        //         document.querySelector(".ui-button-google"),
        //     ];
        //
        //     elements.forEach((element) => {
        //         if (element) {
        //             element.style.animationDelay = "0s";
        //         }
        //     });
        // }, 2000);
        // return () => clearTimeout(timer);
    }, []);



    return (
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
                            <div className={cx("next-input")}>
                                <div className={cx("combined-input")}>
                                    <input className={cx("email")} type={"email"}/>
                                </div>
                            </div>
                        </div>
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
                    <div className={cx("button-login-container")}>
                        <button className={cx("ui-button")}>
                            <span className={cx("content")}>
                                <span className={cx("ui-button-text")}>Login</span>
                                <span className={cx("ui-button-hover-icon")}>
                                    <FontAwesomeIcon icon={faArrowRightLong}
                                                     className={cx("icons")}/>
                                </span>
                            </span>
                        </button>
                    </div>
                </form>
                <div className={cx("external-login-divider-container")}>
                    <div className={cx("external-login-divider")}>
                        <div className={cx("external-login-divider-text")}>or
                        </div>
                    </div>
                </div>
                <div className={cx("external-login-providers")}>
                    <button className={cx('ui-button-google')} onClick={e => onGoogleSignIn(e)}>
                        <span className={cx('button-google-text')}>Đăng nhập bằng Google</span>
                        <span className={cx('button-google-icon')}><FcGoogle/></span>
                    </button>
                </div>
                <p className={cx("help-link")}>
                    <span className={cx("help-link-text")}>New to Laptop?</span>
                    <Link className={cx("ui-arrow-link")} to={"/signup"} onClick={OnClickSignUp}>
                        Get started
                        <span className={cx("arrow-link-icon")}>
                            <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn;