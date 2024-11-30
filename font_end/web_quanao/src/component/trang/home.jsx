import React from "react";
import Navbar from "../Navbar";
import Banner from "../banner";
import SPnoibat from "../SPnoibat";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "../TopProducts";
import Poster from "../Poster";
import Subsribe from "../Subscribe";
import Testimonials from "../Testimonials";
import Footer from "../footer";

const home = () => {

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);
    return <div>
        {/* className="flex flex-col w-full fixed top-0 left-0 z-10"> */}
        <Navbar />
        <Banner />
        <SPnoibat />
        {/* ghi nham day la best selaler */}
        <TopProducts />
        <Poster />
        <Subsribe />
        <SPnoibat />
        <Testimonials />
        <Footer />
    </div>


};
export default home