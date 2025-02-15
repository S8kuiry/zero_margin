import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Groceries", link: "/#" },
  { id: 4, name: "Men's Wear", link: "/#" },
  { id: 5, name: "Women's Wear", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const switchWebsite = () => {
    window.location.href = "https://example.com"; // Replace with actual URL
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 text-2xl font-bold text-white">
          <img src={Logo} alt="Logo" className="w-12" />
          <span className="text-orange-500">Zero-Margin</span>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {Menu.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="text-lg font-medium text-black hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Search & Buttons */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 md:w-56 lg:w-64 transition-all duration-300 border border-black/30 bg-black/10 text-black placeholder-black/60 rounded-full px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <IoMdSearch className="absolute right-3 text-black/70" />
          </div>

          <button
            onClick={handleOrderPopup}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:opacity-80 transition-all duration-300 text-white font-medium px-5 py-2 rounded-full shadow-lg"
          >
            <FaCartShopping className="text-xl" />
            <span className="hidden md:inline">Order</span>
          </button>

          <button
            onClick={switchWebsite}
            className="bg-green-600 hover:bg-green-900 transition-all duration-300 text-white font-medium px-5 py-2 rounded-full shadow-lg"
          >
            0Medicine 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
