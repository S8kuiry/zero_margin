import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Groceries", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Womens Wear", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="backdrop-blur-md bg-white/10 dark:bg-gray-900 dark:text-white shadow-lg fixed top-0 w-full z-50 transition-all duration-300">
      {/* Upper Navbar */}
      <div className="container flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold">
          <img src={Logo} alt="Logo" className="w-12" />
          <span className="text-primary">Zero-Margin</span>
        </a>
        
        {/* Search Bar */}
        <div className="relative hidden sm:flex items-center group">
          <input
            type="text"
            placeholder="Search..."
            className="w-40 sm:w-60 group-hover:w-72 transition-all duration-300 border border-gray-300 dark:border-gray-700 bg-transparent rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
          />
          <IoMdSearch className="absolute right-3 text-gray-500 group-hover:text-primary transition-all duration-300" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 transition-all duration-200 text-white py-2 px-5 rounded-full flex items-center gap-2"
          >
            <FaCartShopping className="text-xl" />
            <span className="hidden sm:inline">Order</span>
          </button>
          <DarkMode />
        </div>
      </div>
      
      {/* Lower Navbar */}
      <nav className="bg-white/20 dark:bg-gray-800 py-2 backdrop-blur-md shadow-md">
        <ul className="flex justify-center gap-6">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="relative text-lg font-medium px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary after:block after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;