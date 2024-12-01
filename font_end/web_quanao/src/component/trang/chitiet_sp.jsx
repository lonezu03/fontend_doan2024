import DetailItem from '../chitietSP.jsx'
import Chitietspapi from '../chitietspapi.jsx'
import Description from '../description.jsx';
import Menu from '../menu.jsx'
import Footer2 from '../footer2.jsx'
import { useParams } from "react-router-dom";

function ChitietSPComponent() {
    //const { id } = useParams(); // Lấy id từ URL
    //console.log("ID from URL:", id); // Kiểm tra giá trị id
    //alert(`Received ID: ${id}`); // Hiển thị id để debug


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