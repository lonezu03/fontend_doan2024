import React, { useState } from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu as MuiMenu, MenuItem, Button } from "@mui/material";

// Danh sách các menu chính
const MenuList = [
    { id: 1, name: "Home", link: "/#0" },
    { id: 2, name: "Shop", link: "/#0" },
    { id: 3, name: "About", link: "/#0" },
    { id: 4, name: "Contact", link: "/#0" },
    { id: 5, name: "New", link: "/#0" },
];

// Danh sách các mục trong dropdown "Trending"
const TrendingItems = [
    { id: 1, name: "Top Sales", link: "/#1" },
    { id: 2, name: "New Arrivals", link: "/#2" },
    { id: 3, name: "Best Reviews", link: "/#3" },
];

const Navbar = () => {
    // Trạng thái của dropdown (để xác định xem dropdown có đang mở hay không)
    const [anchorEl, setAnchorEl] = useState(null);

    // Hàm để mở dropdown khi người dùng nhấn vào "Trending"
    const handleDropdownOpen = (event) => {
        setAnchorEl(event.currentTarget); // Lưu phần tử kích hoạt dropdown
    };

    // Hàm để đóng dropdown
    const handleDropdownClose = () => {
        setAnchorEl(null); // Xóa phần tử kích hoạt dropdown
    };

    return (
        <div
            className="shadow-md  bg-white dark:bg-gray-950 dark:text-white z-50"
        >
            {/* Phần navbar trên cùng */}
            <div className="bg-primary/40 py-2">
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* Logo của trang web */}
                    <div>
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={logo} alt="logo" className="w-10" />
                            ShoppV&M
                        </a>
                    </div>
                    {/* Phần tìm kiếm và nút Order */}
                    <div className="flex items-center gap-4">
                        {/* Thanh tìm kiếm */}
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-[200px] sm:w-[200px]
                                group-hover:w-[300px] transition-all
                                duration-300 rounded-full border
                                border-gray-300 px-2 py-1
                                focus:outline-none focus:border-1 
                                focus:border-primary"
                            />
                            <SearchIcon
                                className="text-gray-500 group-hover:text-primary 
                                absolute top-1/2 -translate-y-1/2 
                                right-3"
                            />
                        </div>
                        {/* Nút Order */}
                        <button
                            onClick={() => alert("This feature is currently not available")}
                            className="bg-gradient-to-r from-primary to-secondary transition-all 
                            duration-200 text-white py-1 px-4 rounded-full flex 
                            items-center gap-3 group"
                        >
                            <span
                                className="group-hover:block hidden transition-all 
                                duration-200"
                            >
                                Order
                            </span>
                            <ShoppingCartIcon className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Phần navbar dưới */}
            <div className="flex justify-center bg-white dark:bg-gray-950 py-2">
                <ul className="sm:flex hidden items-center gap-4">
                    {/* Vòng lặp để render danh sách các menu chính */}
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
                    {/* Dropdown cho mục "Trending" */}
                    <li>
                        <Button
                            onClick={handleDropdownOpen}
                            className="text-black dark:text-white hover:text-primary duration-200 normal-case px-0 font-semibold"
                            endIcon={<ExpandMoreIcon className="text-primary" />} // Thêm mũi tên chỉ xuống
                        >
                            Trending
                        </Button>
                        {/* Menu dropdown hiển thị các mục con của Trending */}
                        <MuiMenu
                            anchorEl={anchorEl} // Gắn với phần tử kích hoạt
                            open={Boolean(anchorEl)} // Kiểm tra trạng thái mở/đóng
                            onClose={handleDropdownClose} // Đóng menu khi nhấn ra ngoài
                            MenuListProps={{
                                "aria-labelledby": "trending-button",
                            }}
                        >
                            {TrendingItems.map((item) => (
                                <MenuItem
                                    key={item.id}
                                    onClick={handleDropdownClose} // Đóng menu khi chọn mục
                                    component="a"
                                    href={item.link} // Liên kết đến mục cụ thể
                                >
                                    {item.name}
                                </MenuItem>
                            ))}
                        </MuiMenu>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
