import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FullLayout = ({element: Children}) => {
    return (
        <div style={{width: "100%", height: "100vh", display: "flex"}}>
            <Header/>
            <Children/>
        </div>
    );
};

export default FullLayout;