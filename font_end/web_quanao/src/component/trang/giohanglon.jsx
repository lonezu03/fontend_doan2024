import Navbar from "../Navbar2";
import Giohang2 from '../giohangapi.jsx'

import Footer2 from '../footer.jsx'

import AOS from "aos";
import React from "react";


const giohanglon = () => {
  React.useEffect(() => {
              AOS.init({
                  offset: 100,
                  duration: 800,
                  easing: "ease-in-sine",
                  delay: 50,
              });
              AOS.refresh();
          }, []);
  const cartItems = [
    {
      id: 1,
      name: 'Chic Ballet Flats',
      image: 'url_to_image_1',
      size: 6,
      colors: ['#800080'], // màu tím
      price: 25.18,
      quantity: 2,
      available: 72,
    },
    {
      id: 2,
      name: 'Durable Work Boots',
      image: 'url_to_image_2',
      size: 6,
      colors: ['#FFD700'], // màu vàng
      price: 93.68,
      quantity: 1,
      available: 10,
    },
    {
      id: 3,
      name: 'Classic Leather Loafers',
      image: 'url_to_image_3',
      size: 6,
      colors: ['#0000FF'], // màu xanh dương
      price: 97.14,
      quantity: 1,
      available: 72,
    },
  ];

  return (
    <div>
      <div className=' h-[120px] '><Navbar /></div>
      <div className="min-h-[650px]">      <Giohang2 />
</div>
      {/* <div><Giohang cartItems={cartItems} /></div> */}
      <Footer2 />
    </div>
  )
}

export default giohanglon;