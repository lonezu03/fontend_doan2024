import { useState } from "react";
import { useSelector } from "react-redux"; // Dùng Redux để lấy trạng thái đăng nhập
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu as MuiMenu, MenuItem, Button } from "@mui/material";
import { getLoginStatus, setLoginStatus } from "../redux/user/loginSelectors";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import  { ProductSlice }   from '../redux/products/productSlice';

const MenuList = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "About", link: "/aboutus" },
    { id: 4, name: "Contact", link: "/Contract" },
    { id: 5, name: "New", link: "/New" },
];

const TrendingItems = [
    { id: 1, name: "Top Sales", link: "/#1" },
    { id: 2, name: "New Arrivals", link: "/#2" },
    { id: 3, name: "Best Reviews", link: "/#3" },
];

const Navbar2 = () => {
    const navigate = useNavigate();
    const [islogin, setislogin] = useState(getLoginStatus);
    const [anchorEl, setAnchorEl] = useState(null);
    const isLoggedIn = getLoginStatus(); // Lấy trạng thái đăng nhập từ localStorage
    console.log(isLoggedIn);
    const handleDropdownOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
//tim kiem
const [search, setSearch] = useState("");
const dispatch = useDispatch();

const handleSearch = (e) => {
  setSearch(e.target.value);
  dispatch(ProductSlice.actions.setSearchKeyword(e.target.value)); // Cập nhật từ khóa vào Redux store
};



    const orderClick = () => {
        if (islogin === true) {
            navigate("/giohang");
        } else if (islogin === false) {
            toast.error("Vui lòng đăng nhập để dùng chức năng!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    const logoclick = () => {

        navigate("/");

    }
    const handleLogout = () => {
        localStorage.setItem("isLoggedIn", JSON.stringify(false)); // Thay đổi trạng thái thành false
        setLoginStatus(false); // Cập nhật trạng thái trong giao diện
        window.location.reload(); // Tùy chọn: Làm mới trang để đồng bộ trạng thái
    };
    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="shadow-md bg-white dark:bg-gray-950 dark:text-white z-50">
            <div className="bg-primary/40 py-2">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div onClick={logoclick}>
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={logo} alt="logo" className="w-10" />
                            ShoppV&M
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearch}
                                placeholder="search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                            />
                            <SearchIcon
                                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                            />
                        </div>
                        {!isLoggedIn && (
                            <button
                                onClick={() => (window.location.href = "/dangnhap")} // Điều hướng đến trang đăng nhập
                                className="bg-white text-primary border border-primary py-1 px-4 rounded-full transition-all duration-200 hover:bg-primary hover:text-white"
                            >
                                Login
                            </button>
                        )}

                        {/* Nút Logout */}
                        {isLoggedIn && (
                            <button
                                onClick={handleLogout} // Gọi hàm xử lý đăng xuất
                                className="bg-red-500 text-white py-1 px-4 rounded-full transition-all duration-200 hover:bg-red-700"
                            >
                                Logout
                            </button>
                        )}
                        <button
                            onClick={() => orderClick()}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">
                                Order
                            </span>
                            <ShoppingCartIcon className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-white dark:bg-gray-950 py-2">
                <ul className="sm:flex hidden items-center gap-4">
                    {MenuList.map((data) => (
                        <li key={data.id}>
                            <a
                                href={data.link}
                                className="inline-block px-4 hover:text-primary duration-200"
                            >
                                {data.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Button
                            onClick={handleDropdownOpen}
                            className="text-black dark:text-white hover:text-primary duration-200 normal-case px-0 font-semibold"
                            endIcon={<ExpandMoreIcon className="text-primary" />}
                        >
                            Trending
                        </Button>
                        <MuiMenu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleDropdownClose}
                            MenuListProps={{
                                "aria-labelledby": "trending-button",
                            }}
                        >
                            {TrendingItems.map((item) => (
                                <MenuItem
                                    key={item.id}
                                    onClick={handleDropdownClose}
                                    component="a"
                                    href={item.link}
                                >
                                    {item.name}
                                </MenuItem>
                            ))}
                        </MuiMenu>
                    </li>
                </ul>
            </div><ToastContainer />
        </div>
    );
};

export default Navbar2;
