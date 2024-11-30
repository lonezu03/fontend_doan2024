import React from "react";
import Pattern from "../assets/Poster/subcribe.jpg";

const PosterImg = {
    backgroundImage: `url(${Pattern})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

const Subscribe = () => {
    return (
        <div
            data-aos="zoom-in"
            className="bg-gray-100 dark:bg-gray-800 text-white py-6"
            style={PosterImg}
        >
            <div className="container mx-auto backdrop-blur-sm px-4 sm:px-8">
                <div className="text-center sm:text-left mb-4">
                    <h1
                        data-aos="fade-up"
                        className="text-xl sm:text-3xl font-semibold text-gray-900 dark:text-white"
                    >
                        Get Notified About New Products
                    </h1>
                    <p
                        data-aos="fade-up"
                        className="mt-1 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                    >
                        Stay updated with our latest trends and exclusive offers.
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    className="flex items-center justify-center sm:justify-start"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-2/3 p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
