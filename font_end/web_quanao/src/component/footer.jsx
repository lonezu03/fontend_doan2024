import logo from "../assets/logo.png";
import footer from "../assets/footer2.jpg";
import { FaInstagram, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterImg = {
  backgroundImage: `url(${footer})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Shop",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "New",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div style={FooterImg} className="mb-20">
      <div className="container mx-auto py-10 px-5">
        <div data-aos="zoom-in"
          className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-xl sm:text-2xl font-bold text-black">
                V&Mshop
              </h1>
            </div>
            <p className="text-black">Thank you for stopping by my place.</p>
          </div>

          {/* Footer Links */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-black">
              Important Links
            </h2>
            <ul className="space-y-3">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer text-black hover:text-primary hover:translate-x-1 transition duration-300"
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links and Contact */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-black">
              Connect With Us
            </h2>
            <div className="flex items-center gap-4 mb-5">
              <a href="#" className="text-3xl hover:text-primary">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl hover:text-primary">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl hover:text-primary">
                <FaInstagram />
              </a>
            </div>
            <div className="space-y-3 text-black">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Nodia, Utra Pradesh</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>012345679</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
