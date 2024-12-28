import React from "react";
import ImgNew1 from "../assets/New/New1.png";
import ImgNew2 from "../assets/New/New2.png";
import ImgNew3 from "../assets/New/New3.png";
import ImgNew4 from "../assets/New/New4.png";
import ImgNew5 from "../assets/New/New5.png";
import ImgNew6 from "../assets/New/New6.png";
import ImgNew7 from "../assets/New/New7.png";
import ImgNew8 from "../assets/New/New8.png";
import ImgNew9 from "../assets/New/New9.png";
import AOS from "aos";
import "aos/dist/aos.css";

const NewFashion = () => {
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
        <div className="bg-gray-100 min-h-screen flex flex-col" data-aos="fade-up">
            {/* Header */}
            <header className="bg-primary text-white p-4 text-center">
                <h1 className="text-4xl font-bold">New Fashion Trends</h1>
                <p className="text-xl mt-2">Stay ahead with the latest styles</p>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-6">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Article 1 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew1}
                            alt="Fashion Trend 1"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/share-your-color" target="_blank" rel="noopener noreferrer">
                                    Share your color
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                Discover the hottest styles for this summer with light fabrics, vibrant colors, and modern designs.
                            </p>
                        </div>
                    </article>

                    {/* Article 2 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew2}
                            alt="Fashion Trend 2"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/local-brand-streetwear" target="_blank" rel="noopener noreferrer">
                                    Local Brand Streetwear
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                Street fashion is evolving with new innovative designs. Get the perfect streetwear look.
                            </p>
                        </div>
                    </article>

                    {/* Article 3 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew3}
                            alt="Fashion Trend 3"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/levents-classic" target="_blank" rel="noopener noreferrer">
                                    LEVENTS CLASSIC
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                Embrace the winter chill with chic outerwear, cozy textures, and luxurious fabrics.
                            </p>
                        </div>
                    </article>

                    {/* Article 4 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew4}
                            alt="Fashion Trend 4"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/chat-lieu-vai-levents" target="_blank" rel="noopener noreferrer">
                                    Autumn Vibes
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                Embrace the fall season with rich colors and warm fabrics.
                            </p>
                        </div>
                    </article>

                    {/* Article 5 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew5}
                            alt="Fashion Trend 5"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/xu-huong-thoi-trang-xuan-he-2024" target="_blank" rel="noopener noreferrer">
                                    Classic Couture
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                Explore timeless pieces that never go out of style, perfect for any occasion.
                            </p>
                        </div>
                    </article>

                    {/* Article 6 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew6}
                            alt="Fashion Trend 6"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/thoi-trang-giao-mua" target="_blank" rel="noopener noreferrer">
                                    Street Chic
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                Combining street style with high fashion for a bold and unique look.
                            </p>
                        </div>
                    </article>

                    {/* Article 7 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew7}
                            alt="Fashion Trend 7"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/phoi-mau-don-sac" target="_blank" rel="noopener noreferrer">
                                    Boho Bliss
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                A free-spirited look with flowing fabrics and eclectic patterns.
                            </p>
                        </div>
                    </article>

                    {/* Article 8 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew8}
                            alt="Fashion Trend 8"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/hoa-tiet-thoi-trang" target="_blank" rel="noopener noreferrer">
                                    Sporty Luxe
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                A fusion of athletic wear and luxury fashion for a sleek, stylish look.
                            </p>
                        </div>
                    </article>

                    {/* Article 9 */}
                    <article className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="zoom-in">
                        <img
                            src={ImgNew9}
                            alt="Fashion Trend 9"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">
                                <a href="https://levents.asia/blogs/xu-huong-thoi-trang/chien-dich-new-branding-big-campaign" target="_blank" rel="noopener noreferrer">
                                    Summer Essentials
                                </a>
                            </h2>
                            <p className="mt-2 text-gray-700">
                                Must-have pieces for the summer season, from casual to elegant.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default NewFashion;
