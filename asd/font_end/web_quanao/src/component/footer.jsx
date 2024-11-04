import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Thông tin giới thiệu */}
        <div className="mb-4">
          <p>
            The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style.
          </p>
        </div>

        {/* Liên kết nhanh */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Minimal</h2>
          <ul>
            <li><a href="#about" className="text-white">About us</a></li>
            <li><a href="#contact" className="text-white">Contact us</a></li>
            <li><a href="#faqs" className="text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Thông tin pháp lý */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Legal</h2>
          <ul>
            <li><a href="#terms" className="text-white">Terms and conditions</a></li>
            <li><a href="#privacy" className="text-white">Privacy policy</a></li>
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Contact</h2>
          <p>support@minimals.cc</p>
        </div>

        {/* Biểu tượng mạng xã hội */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500" />
          </a>
          <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
            <SiZalo className="text-white hover:text-blue-500" />
          </a>
        </div>

        {/* Bản quyền */}
        <div className="mt-4">
          <p>© All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
