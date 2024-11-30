import React from "react";
import Img1 from "../assets/AoTshirt/ao1.jpg";
import Img2 from "../assets/AoTshirt/ao2.jpg";
import Img3 from "../assets/AoTshirt/ao3.jpg";
import Img4 from "../assets/AoTshirt/ao4.jpg";
import Img5 from "../assets/AoTshirt/ao5.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Basic Tshirt",
        description: "A comfortable and stylish basic t-shirt for everyday wear.",
    },
    {
        id: 2,
        img: Img2,
        title: "Sporty Tee",
        description: "Perfect for workouts or casual outings, crafted with breathable material.",
    },
    {
        id: 3,
        img: Img3,
        title: "Classic Fit Tshirt",
        description: "A timeless design that matches any outfit effortlessly.",
    },
    {
        id: 4,
        img: Img4,
        title: "Graphic Tee",
        description: "Show off your personality with unique and vibrant graphics.",
    },
    {
        id: 5,
        img: Img5,
        title: "Basic Tee",
        description: "Express a stylish and youthful vibe for you.",
    },
];

const TopProducts = () => {
    return (
        <div>
            <div className="container">
                {/* Header section */}
                <div className="text-left mb-24">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Rated Product for You</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        The Uniquely Classic collection is not only fashionable but also a statement of style,
                        individuality, and confidence, allowing each person to become "classic" in their own way.
                    </p>
                </div>
                {/* Body section */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-8"
                >
                    {ProductsData.map((data) => (
                        <div
                            key={data.id}
                            data-aos="zoom-in"
                            className="rounded-2xl bg-white dark:bg-gray-800 
                             hover:bg-black/80 dark:hover:bg-primary 
                             hover:text-white relative shadow-xl
                             duration-300 group max-w-[300px]"
                        >
                            {/* img section */}
                            <div className="h-[120px]">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="max-w-[140px] block mx-auto transform 
                                    -translate-y-20 group-hover:scale-110 
                                    duration-500 drop-shadow-md"
                                />
                            </div>
                            {/* details section */}
                            <div className="p-4 text-center">
                                {/* star rating */}
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                </div>
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p
                                    className="text-gray-500 group-hover:text-white duration-300 
                                    text-sm line-clamp-2"
                                >
                                    {data.description}
                                </p>
                                <button
                                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4
                                    rounded-full mt-4 group-hover:bg-white
                                    group-hover:text-primary"
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProducts;
