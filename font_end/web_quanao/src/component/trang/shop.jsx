import Menu from '../Navbar2.jsx'
//import Banner from '../baner.jsx'
import ProductCardList from '../productCardList.jsx'
import Banner from "../banner";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import Footer2 from '../footer.jsx'
import Filter from '../filters.jsx'
//import AddproductForm from '../addProductForm.jsx'
function shop() {
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
        <div className="flex flex-col gap-6 bg-gray-50">
            {/* Header */}
                <Menu />
            {/* <Banner /> */}

            {/* Bộ lọc */}
            <section className="container mx-auto p-4">
                <Filter />
            </section>

            {/* Danh sách sản phẩm */}
            <main className="">
                <ProductCardList />
            </main>

            {/* Danh sách SP */}
            
            {/* Footer */}
            <footer >
                <Footer2 />
            </footer>
        </div>
    )
}
export default shop