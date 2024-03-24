import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {callApi} from "../../utils/fetch";
import {apiUrl} from "../../utils/config";
import {login, signInWithGoogle, signUp} from "../../utils/firebase/auth";

const SignUp = () => {
    const navigate = useNavigate();
    const {userLoggedIn} = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (userLoggedIn) {
            navigate("/", {replace: true});
        }
    }, [navigate, userLoggedIn]);

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

    const onSubmit = async (e) => {
        e.preventDefault();
        if (isSigningUp)
            return
        setIsSigningUp(true);
        await signUp({
                displayName: name,
                email: email,
                password: password,
                phone: null,
                avatar: "", // TODO
            },
            () => setErrorMessage("Hệ thống đang bảo trì, vui lòng thử lại sau."),
            () => setErrorMessage("Không tìm thấy nhóm quyền."),
            () => setErrorMessage("Email đã tồn tại.")
        );
        setIsSigningUp(false);
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
            <form onSubmit={onSubmit}>
                <label htmlFor={"text-name-signup"}>
                    Name:
                </label>
                <input
                    id={"text-name-signup"}
                    type={"text"}
                    autoComplete={"name"}
                    required={true}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setErrorMessage("");
                    }}
                />
                <br/>
                <label htmlFor={"text-email-signup"}>
                    Email:
                </label>
                <input
                    id={"text-email-signup"}
                    type={"email"}
                    autoComplete={"email"}
                    required={true}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMessage("");
                    }}
                    onBlur={checkEmailExists}
                />
                <br/>
                <label htmlFor={"text-password-signup"}>
                    Password:
                </label>
                <input
                    id={"text-password-signup"}
                    type={"password"}
                    autoComplete={"current-password"}
                    required={true}
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                        setErrorMessage("");
                    }}
                />
                <br/>
                {errorMessage && (
                    <span>{errorMessage}</span>
                )}
                <br/>
                <button
                    type={"submit"}
                    disabled={isSigningUp}
                >
                    {isSigningUp ? "Signing up..." : "Sign up"}
                </button>
            </form>

            <p>Already have an account? <Link to={"/login"}>Login</Link></p>

            <button
                disabled={isSigningUp}
                onClick={e => onGoogleSignUp(e)}
            >
                {isSigningUp ? "Signing in..." : "Continue with Google"}
            </button>
        </div>
    );
};

export default SignUp;