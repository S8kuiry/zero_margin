import React from "react";
<<<<<<< HEAD
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Groceries",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Womens Wear",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2" id = "nav">
        <div className="container flex justify-center items-center">
          <div style={{position:"absolute",left:"40px"}}>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div style={{position:"relative",left:"300px"}} className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
        {/*}        ---------------------- <li className="group relative cursor-pointer">
            
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
                </li>   -------------     {*/}
        </ul>
=======
import Logo from "../../assets/logo1.png";
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
            0-Medicine 
          </button>
        </div>
>>>>>>> b550d34 (first)
      </div>
    </div>
  );
};

export default Navbar;
