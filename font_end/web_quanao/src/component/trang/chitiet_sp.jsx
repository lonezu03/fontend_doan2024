import DetailItem from '../chitietSP.jsx'
import Chitietspapi from '../chitietspapi.jsx'
import Description from '../description.jsx';
import React from "react";

import Menu from '../Navbar2.jsx'
import Footer2 from '../footer.jsx'
import { useParams } from "react-router-dom";
import AOS from "aos";

function ChitietSPComponent() {
    //const { id } = useParams(); // Lấy id từ URL
    //console.log("ID from URL:", id); // Kiểm tra giá trị id
    //alert(`Received ID: ${id}`); // Hiển thị id để debug
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
        <>
            <div className="h-[120px]">
                <Menu />
            </div>
            <Chitietspapi  /> {/* Truyền id vào Chitietspapi */}
            <Description />
            <Footer2 />
        </>
    );
}

export default ChitietSPComponent;