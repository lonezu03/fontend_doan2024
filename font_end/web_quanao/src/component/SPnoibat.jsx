import React from "react";
import Img1 from "../assets/MauThoiTrang/mau1.jpg";
import Img2 from "../assets/MauThoiTrang/mau2.jpg";
import Img3 from "../assets/MauThoiTrang/mau3.jpg";
import Img4 from "../assets/MauThoiTrang/mau4.jpg";
import Img5 from "../assets/MauThoiTrang/mau5.jpg";
import { FaStar } from "react-icons/fa";

const ProductData = [
    {
        id: 1,
        img: Img1,
        rating: 5.0,
        title: "Women Ethnic",
        colors: ["white", "black", "red"],
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        rating: 4.5,
        title: "Women Western",
        colors: ["blue", "green"],
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        rating: 4.0,
        title: "Women Goggles",
        colors: ["yellow", "grey"],
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        rating: 3.5,
        title: "Women Alena",
        colors: ["purple", "orange"],
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        rating: 5.0,
        title: "Women Bupaka",
        colors: ["pink", "black"],
        aosDelay: "800",
    },
];

const SPnoibat = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Selling Product for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Product</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        The Uniquely Classic collection is not only fashionable but also a statement of style,
                        individuality, and confidence, allowing each person to become "classic" in their own way.
                    </p>
                </div>
                {/* Body section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* Card section */}
                        {ProductData.map((data) => (
                            <div
                                key={data.id}
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                className="space-y-3"
                            >
                                <img
                                    src={data.img} alt={data.title}
                                    className="h-[220px] w-[150px] object-cover rounded-md" // Sửa kích thước đồng nhất cho các hình ảnh
                                />
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className="text-sm text-gray-600">{data.colors.join(", ")}</p> {/* Hiển thị danh sách màu sắc */}
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* view all button  */}
                    <div className="flex justify-center">
                        <button className="text-center mt-10 
                        cursor-pointer bg-primary text-white py-1 px-5
                        rounded-md">
                            View All Button
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SPnoibat;
