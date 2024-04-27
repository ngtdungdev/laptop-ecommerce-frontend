import classNames from "classnames/bind";
import styles from "./Home.module.scss"
import logo from "../../assets/images/logoWeb.svg";
import laptop1 from "../../assets/images/1.png"
import laptop2 from "../../assets/images/2.png"
import laptop3 from "../../assets/images/3.png"
import laptop4 from "../../assets/images/4.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const cx = classNames.bind(styles)
    // const navigate = useNavigate();
    // const {userLoggedIn} = useAuth();
    //
    // useEffect(() => {
    //     if (!userLoggedIn) {
    //         navigate("/login", {replace: true});
    //     }
    // }, [navigate, userLoggedIn]);

    return (
        <div className={cx("home-container")}>
            <div className={cx("ui-top")}>
                <div className={cx("background")}>
                    <img src={"https://www.fluxmagazine.com/wp-content/uploads/2019/10/Career-Web-3.jpg"} alt={""}/>
                </div>
                <div className={cx("below-header")}>
                    <div className={cx("arrow", "left")}>
                        <FontAwesomeIcon icon={faCircleChevronLeft}/>
                    </div>
                    <div className={cx("slider")}>
                        <div className={cx("slides")}>
                            <input type="radio" name="radio-btn" className={cx("radio1")}/>
                            <input type="radio" name="radio-btn" className={cx("radio2")}/>
                            <input type="radio" name="radio-btn" className={cx("radio3")}/>
                            <input type="radio" name="radio-btn" className={cx("radio4")}/>
                            <div className={cx("slide", "frist")}>
                                <img src={laptop1} alt={""}/>
                            </div>
                            <div className={cx("slide", "two")}>
                                <img src={laptop2} alt={""}/>
                            </div>
                            <div className={cx("slide", "three")}>
                                <img src={laptop3} alt={""}/>
                            </div>
                            <div className={cx("slide", "four")}>
                                <img src={laptop4} alt={""}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("arrow", "right")}>
                        <FontAwesomeIcon icon={faCircleChevronRight}/>
                    </div>
                </div>
            </div>
            <div className={cx("ui-center")}>

            </div>
            <div className={cx("ui-bottom")}>

            </div>
        </div>
    );
};

export default Home;