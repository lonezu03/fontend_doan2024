import { FaFacebookF, FaInstagram, FaFacebookMessenger } from 'react-icons/fa'; // Sử dụng react-icons để thêm biểu tượng social media

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Thông tin dự án */}
        <div className="text-center mb-6">
          <p className="text-lg mb-4">
            The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style.
          </p>
        </div>

        {/* Các mục menu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-3">Minimal</h3>
            <ul>
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <ul>
              <li><a href="mailto:support@minimals.cc" className="hover:text-white">support@minimals.cc</a></li>
              <li>© All rights reserved.</li>
            </ul>
          </div>
        </div>

        {/* Biểu tượng mạng xã hội */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookMessenger size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
