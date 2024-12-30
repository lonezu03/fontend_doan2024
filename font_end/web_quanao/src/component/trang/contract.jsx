import React from 'react';
import Menu from '../Navbar2.jsx';
import "aos/dist/aos.css";
import AOS from "aos";
import Footer2 from '../footer.jsx';
import Contract from '../ContactPage.jsx';




function contract() {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 50,
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <Menu />
            <Contract />
            <Footer2 />
        </div>
    );
}

export default contract;