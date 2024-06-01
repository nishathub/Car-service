import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const Roots = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;