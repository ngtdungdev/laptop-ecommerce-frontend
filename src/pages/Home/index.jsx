import classNames from "classnames/bind";
import styles from "./Home.module.scss"
import background from "../../assets/images/img-background.jpg";
import laptop1 from "../../assets/images/1.png"
import laptop2 from "../../assets/images/2.png"
import laptop3 from "../../assets/images/3.png"
import laptop4 from "../../assets/images/4.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

const Home = () => {
    const cx = classNames.bind(styles)
    const [counter, setCounter] = useState(1);
    // const navigate = useNavigate();
    // const {userLoggedIn} = useAuth();
    //
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1);
            if (counter > 4) {
                setCounter(1);
            }
        }, 3000);
        return () => clearInterval(interval)
        // if (!userLoggedIn) {
        //     navigate("/login", {replace: true});
        // }
        // }, [navigate, userLoggedIn]);
    }, [counter]);
    const handleClickIconLeft = () => {
        setCounter(counter - 1);
        if (counter <= 1) {
            setCounter(4);
        }
    }
    const handleClickIconRight = () => {
        setCounter(counter + 1);
        if (counter > 4) {
            setCounter(1);
        }
    }
    return (
        <div className={cx("home-container")}>
            <div className={cx("ui-top")}>
                <div className={cx("background")}>
                    <img src={background} alt={""}/>
                </div>
                <div className={cx("below-header")}>
                    <div className={cx("arrow", "left")}>
                        <FontAwesomeIcon icon={faCircleChevronLeft} onClick={handleClickIconLeft}/>
                    </div>
                    <div className={cx("slider-container")}>
                        <div className={cx("slider")}>
                            <div className={cx("slides")}>
                                <input type="radio" name="radio-btn" className={cx("radio1")} checked={counter === 1}/>
                                <input type="radio" name="radio-btn" className={cx("radio2")} checked={counter === 2}/>
                                <input type="radio" name="radio-btn" className={cx("radio3")} checked={counter === 3}/>
                                <input type="radio" name="radio-btn" className={cx("radio4")} checked={counter === 4}/>
                                <div className={cx("slide", "first")}>
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
                        <div className={cx("list-radio")}>
                            <input type="radio" name="radio-view" className={cx("radio")} checked={counter === 1}/>
                            <input type="radio" name="radio-view" className={cx("radio")} checked={counter === 2}/>
                            <input type="radio" name="radio-view" className={cx("radio")} checked={counter === 3}/>
                            <input type="radio" name="radio-view" className={cx("radio")} checked={counter === 4}/>
                        </div>
                    </div>
                    <div className={cx("arrow", "right")}>
                        <FontAwesomeIcon icon={faCircleChevronRight}  onClick={handleClickIconRight}/>
                    </div>
                </div>
            </div>
            <div className={cx("ui-center")}>
                <div className={cx("background")}>
                    <div className={cx("container")}></div>
                </div>
                <div className={cx("")}>

                </div>
            </div>
            <div className={cx("ui-bottom")}>

            </div>
        </div>
    );
};

export default Home;