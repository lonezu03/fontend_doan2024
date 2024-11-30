import React from "react";
import anh1 from "../assets/Banner/shopping.png"; // Ảnh 1
import anh2 from "../assets/Banner/bigsales.png"; // Ảnh 2
import anh3 from "../assets/Banner/womenshoping.png"; // Ảnh 3
import Carousel from "react-material-ui-carousel"; // Thư viện Carousel để tạo slide ảnh
import { Button } from "@mui/material"; // Sử dụng Button từ Material-UI

const Banner = () => {
  // Dữ liệu cho các slide banner
  const items = [
    {
      img: anh1,
      title: "Special Deals For You", // Tiêu đề cho slide
      description: `Colorful Life. 
        Show Your Personality. 
        Customers confidently express their unique style, avoiding conformity.`, // Mô tả cho slide
    },
    {
      img: anh2,
      title: "Big Sales Today", // Tiêu đề cho slide
      description: `Get amazing discounts. 
        Don't miss the chance to shop for your favorite items.`, // Mô tả cho slide
    },
    {
      img: anh3,
      title: "Exclusive for Women", // Tiêu đề cho slide
      description: `Elegant and stylish collections 
        tailored just for you.`, // Mô tả cho slide
    },
  ];

  return (
    <div
      className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] flex justify-center items-center duration-200"
    >
      {/* Mẫu nền cho phần hero */}
      <div
        className="h-[650px] w-[650px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"
      ></div>
      {/* Phần hero chính */}
      <div className="container pb-8 sm:pb-0">
        {/* Sử dụng Carousel để tạo các slide ảnh */}
        <Carousel
          indicators={false} // Tắt các indicator
          navButtonsAlwaysVisible // Luôn hiển thị các nút điều hướng
          animation="slide" // Kiểu hoạt hình cho chuyển động slide
          duration={500} // Thời gian chuyển động trong 500ms
        >
          {/* Lặp qua các mục trong items và hiển thị từng slide */}
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2">
              {/* Phần nội dung văn bản */}
              <div
                className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
              >
                {/* Tiêu đề của slide */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  {item.title}
                </h1>
                {/* Mô tả của slide */}
                <p className="text-base sm:text-lg mt-4 whitespace-pre-line">
                  {item.description}
                </p>
                <div className="mt-6">
                  {/* Nút "Order Now" */}
                  <Button
                    variant="contained"
                    color="primary"
                    className="py-2 px-6 rounded-full"
                    sx={{
                      background: "linear-gradient(to right, #a8e063, #56ab2f)", // Gradient cho màu nền
                      color: "white", // Màu chữ trắng
                      '&:hover': {
                        transform: 'scale(1.05)', // Phóng to khi hover
                        transition: '0.3s', // Thời gian chuyển động khi hover
                      },
                    }}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
              {/* Phần hiển thị ảnh */}
              <div className="order-1 sm:order-2">
                <div className="relative z-10">
                  {/* Hiển thị ảnh với kích thước đã điều chỉnh */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[290px] h-[290px] sm:h-[400px] sm:w-[400px] sm:scale-105 
                    lg:scale-120 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
