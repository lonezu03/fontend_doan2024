import React from "react";
import Carousel from "react-material-ui-carousel";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "One day, everything will change, but the clothes at the shop will always be stylish. Come by the shop to pick out some beautiful outfits, ladies!",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Sophia",
        text: "The shop's collection is breathtaking! I found exactly what I was looking for and more. Highly recommend checking it out!",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Daniel",
        text: "Absolutely love the quality and style of the outfits here. The staff is incredibly helpful too. Worth every penny!",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Olivia",
        text: "The attention to detail in every piece of clothing is phenomenal. I'll definitely be coming back for more!",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Liam",
        text: "This shop has completely changed how I view fashion. Everything is so elegant and timeless.",
        img: "https://picsum.photos/105/105",
    },
    {
        id: 6,
        name: "Aia",
        text: "The shop's collection is breathtaking! I found exactly what I was looking for and more. Highly recommend checking it out!",
        img: "https://picsum.photos/106/106",
    },
];

const Testimonials = () => {
    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">What our Customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        The Uniquely Classic collection is not only fashionable but also a statement of style,
                        individuality, and confidence, allowing each person to become "classic" in their own way.
                    </p>
                </div>

                {/* Testimonial carousel */}
                <div data-aos="zoom-in"
                    className="overflow-hidden">
                    <Carousel
                        indicators={false} // Disable indicators
                        navButtonsAlwaysVisible={false} // Remove navigation buttons
                        animation="slide" // Smooth sliding animation
                        duration={1000} // Slide transition duration (1 second)
                        autoPlay // Enable automatic sliding
                        interval={3000} // Slide interval (3 seconds)
                        fullHeightHover={false} // Disable hover height changes
                    >
                        {/* Display three cards per slide */}
                        {Array.from({ length: Math.ceil(TestimonialData.length / 3) }).map((_, index) => (
                            <div key={index} className="flex justify-center gap-4">
                                {TestimonialData.slice(index * 3, index * 3 + 3).map((data) => (
                                    <div
                                        key={data.id}
                                        className="flex flex-col items-center gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 w-[300px]"
                                    >
                                        <img
                                            src={data.img}
                                            alt={data.name}
                                            className="rounded-full w-20 h-20 mb-4"
                                        />
                                        <p className="text-xs text-gray-500">{data.text}</p>
                                        <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
