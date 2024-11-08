import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Đây là danh sách hình ảnh của banner
  const banners = [
    'https://anhvienpiano.com/wp-content/uploads/2018/08/dich-vu-chup-anh-thoi-trang-cho-shop-quan-ao-dep-gia-re-768x615.jpg',
    'https://binhduongngaynay.com/uploads/webps/admin/2022-02/goi-y-cach-chup-anh-dep-thu-hut-khach-hang.webp?w=700&mode=pad',
    'https://dony.vn/wp-content/uploads/2022/03/decor-chup-anh-thoi-trang-768x576.jpg',
  ];

  // Hàm để chuyển đến banner tiếp theo
  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Hàm để quay về banner trước
  const prevBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  // Tự động chuyển banner sau mỗi 4 giây
  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 3000); // 4 giây

    return () => clearInterval(interval); // Xóa interval khi component bị unmount
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={banners[currentIndex]}
        alt="Banner"
        style={{ width: '800px', height: '300px', borderRadius: '8px' }}
      />
      <div>
        
      </div>
      <div id="iconnext">
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              size="3x"
              onClick={prevBanner}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              size="3x"
              onClick={nextBanner}
            />
          </div>
    </div>
  );
};



export default Banner;
