import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import FullLayout from "../layouts/FullLayout";
import Home from "../pages/Home";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Shop from "../pages/Shop";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FullLayout">
                <FullLayout/>
            </ComponentPreview>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/Shop">
                <Shop/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews