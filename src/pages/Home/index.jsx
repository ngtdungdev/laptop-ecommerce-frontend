import classNames from "classnames/bind";
import styles from "./Home.module.scss"
import background from "../../assets/images/img-background.jpg";
import laptop1 from "../../assets/images/1.png"
import laptop2 from "../../assets/images/2.png"
import laptop3 from "../../assets/images/3.png"
import laptop4 from "../../assets/images/4.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong, faCircleChevronLeft, faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import ProductItem from "../../components/ProductItem";
import laptop from "../../assets/images/laptopTest.png";
import asus from "../../assets/images/logo-asus.svg";

const Home = () => {
    const cx = classNames.bind(styles)
    const [counter, setCounter] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
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
    const handleClickButtonCart = () => {
        setIsClicked(!isClicked);
    };
    const [reviews, setReviews] = useState([
        {
            video: "https://www.youtube.com/embed/-9v2IQVoBX8",
            title: "Trên tay Dell XPS 13 Plus: siêu tối giản!!"
        },
        {
            video: "https://www.youtube.com/embed/039mJSEMPdw",
            title: "Đây mới là Laptop sáng tạo - Macbook Pro 16 Killer! | Asus Zenbook Pro 16X Oled"
        },
        {
            video: "https://www.youtube.com/embed/-KN8hApyh2o",
            title: "ASUS Zenbook 14X OLED: Đẹp mê ly, nhiều tính năng xịn sò !!!"
        },
        {
            video: "https://www.youtube.com/embed/Q7w50fG-GsM",
            title: "Nên mua MacBook nào? Air, Pro 13, Pro 14 hay Pro 16?"
        }
    ]);
    const swapElements = (index) => {
        let newReviews = [...reviews];
        let temp = newReviews[index];
        newReviews[index] = newReviews[0];
        newReviews[0] = temp;
        setReviews(newReviews);
    };
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
                <div className={cx("panel-container")}>
                    <div className={cx("ui-left")}>
                        <div className={cx("text")}>
                            <span>Khám Phá Thế Giới Laptop Tại TechBest</span>
                        </div>
                        <div className={cx("panel")}>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                    </div>
                    <div className={cx("ui-right")}>
                        <div className={cx("product-container")}>
                            <div className={cx("product-top")}>
                                <img src={laptop} alt={""}/>
                            </div>
                            <div className={cx("product-bottom")}>
                                <div className={cx("ui-data")}>
                                    <div className={cx("icon")}>
                                        <img src={asus} alt={""}/>
                                    </div>
                                    <div className={cx("name-laptop")}>
                                        <p>MACBOOK AIR 13 2020 - M1 256GB</p>
                                    </div>
                                </div>
                                <div className={cx("price")}>
                                    <p>26.000.000VNĐ</p>
                                </div>
                                <div className={cx("button-cart")}>
                                    <div className={cx("button")}>
                                        <p>Add to Cart</p>
                                        <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("ui-cart", isClicked ? 'clicked-choice' : 'clicked-unChoice')}
                                 onClick={handleClickButtonCart}>
                                <div className={cx("cart")}>

                                </div>
                            </div>
                        </div>
                        <div className={cx("product-container")}>
                            <div className={cx("product-top")}>
                                <img src={laptop} alt={""}/>
                            </div>
                            <div className={cx("product-bottom")}>
                                <div className={cx("ui-data")}>
                                    <div className={cx("icon")}>
                                        <img src={asus} alt={""}/>
                                    </div>
                                    <div className={cx("name-laptop")}>
                                        <p>MACBOOK AIR 13 2020 - M1 256GB</p>
                                    </div>
                                </div>
                                <div className={cx("price")}>
                                    <p>26.000.000VNĐ</p>
                                </div>
                                <div className={cx("button-cart")}>
                                    <div className={cx("button")}>
                                        <p>Add to Cart</p>
                                        <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("ui-cart", isClicked ? 'clicked-choice' : 'clicked-unChoice')}
                                 onClick={handleClickButtonCart}>
                                <div className={cx("cart")}>

                                </div>
                            </div>
                        </div>
                        <div className={cx("product-container")}>
                            <div className={cx("product-top")}>
                                <img src={laptop} alt={""}/>
                            </div>
                            <div className={cx("product-bottom")}>
                                <div className={cx("ui-data")}>
                                    <div className={cx("icon")}>
                                        <img src={asus} alt={""}/>
                                    </div>
                                    <div className={cx("name-laptop")}>
                                        <p>MACBOOK AIR 13 2020 - M1 256GB</p>
                                    </div>
                                </div>
                                <div className={cx("price")}>
                                    <p>26.000.000VNĐ</p>
                                </div>
                                <div className={cx("button-cart")}>
                                    <div className={cx("button")}>
                                        <p>Add to Cart</p>
                                        <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("ui-cart", isClicked ? 'clicked-choice' : 'clicked-unChoice')}
                                 onClick={handleClickButtonCart}>
                                <div className={cx("cart")}>

                                </div>
                            </div>
                        </div>
                        <div className={cx("product-container")}>
                            <div className={cx("product-top")}>
                                <img src={laptop} alt={""}/>
                            </div>
                            <div className={cx("product-bottom")}>
                                <div className={cx("ui-data")}>
                                    <div className={cx("icon")}>
                                        <img src={asus} alt={""}/>
                                    </div>
                                    <div className={cx("name-laptop")}>
                                        <p>MACBOOK AIR 13 2020 - M1 256GB</p>
                                    </div>
                                </div>
                                <div className={cx("price")}>
                                    <p>26.000.000VNĐ</p>
                                </div>
                                <div className={cx("button-cart")}>
                                    <div className={cx("button")}>
                                        <p>Add to Cart</p>
                                        <FontAwesomeIcon icon={faArrowRightLong} className={cx("icons")}/>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("ui-cart", isClicked ? 'clicked-choice' : 'clicked-unChoice')}
                                 onClick={handleClickButtonCart}>
                                <div className={cx("cart")}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("ui-bottom")}>
                <div className={cx("background")}>
                    <div className={cx("container")}></div>
                </div>
                <div className={cx("panel")}>
                    <div className={cx("sub-container-heading")}>
                        <h1>VIDEO REVIEW SẢN PHẨM</h1>
                    </div>
                    <div className={cx("sub-container-content")}>
                        <div className={cx("sub-container-content-left")}>
                            <div className={cx("left-content1")}>
                                <iframe className={cx("sub-clip")} src={reviews[0].video}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={cx("left-content2")}>
                                <p style={{fontSize: 15}}>{reviews[0].title}</p>
                            </div>
                        </div>
                        <div className={cx("sub-container__content-right")}>
                            <div className={cx("right-content1")} onClick={() => swapElements(1)}>
                                <iframe width="120" height="88" src={reviews[1].video}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                <p>{reviews[1].title}</p>
                            </div>
                            <hr className={cx("under")}/>
                            <div className={cx("right-content2")} onClick={() => swapElements(1)}>
                                <iframe width="120" height="88" src={reviews[2].video}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                <p>{reviews[2].title}</p>
                            </div>
                            <hr className={cx("under")}/>
                            <div className={cx("right-content3")} onClick={() => swapElements(1)}>
                                <iframe width="120" height="88" src={reviews[3].video}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                <p>{reviews[3].title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;