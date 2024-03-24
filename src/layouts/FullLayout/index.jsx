import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FullLayout = ({element: Children}) => {
    return (
        <div>
            <Header/>
            <Children/>
            <Footer/>
        </div>
    );
};

export default FullLayout;