import React, { useState } from "react"
import logo from "../assets/logos/logo-simple.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
  // setting default value for nabar
  const [nav, setNav] = useState(false);

  // set nav to its oposite value with the burger menu / close icon
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex w-auto h-16 md:px-6 lg:px-[8%] justify-between items-center bg-white/[.8] drop-shadow-lg z-50">
      <a href="/">
        <img src={logo} alt="logo" className="h-[45px] cursor-pointer" />
      </a>

      {/* hamburger menu */}
      <ul
        className={
          !nav
            ? "fixed right-[-100%] top-16 duration-500"
            : "fixed right-0 top-16 w-[60%] h-full ease-in-out duration-500"
        }
      >
        <li className="border-b p-4 border-indigo-300 bg-white/[.8] hover:text-red-500 duration-300">
          <a href="/">Home</a>
        </li>
        <li className="border-b p-4 border-indigo-300 bg-white/[.8] hover:text-red-500 duration-300">
          <a href="/services">Sevices</a>
        </li>
        <li className="border-b p-4 border-indigo-300 bg-white/[.8] hover:text-red-500 duration-300">
          <a href="/about">About</a>
        </li>
        <li className="border-b p-4 border-indigo-300 bg-white/[.8] hover:text-red-500 duration-300">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="border-b p-4 border-indigo-300 bg-white/[.8] hover:text-red-500 duration-300">
          <a href="/career">Careers</a>
        </li>
        <li className="border-b p-4 border-indigo-300 bg-white/[.8] hover:text-red-500 duration-300">
          <a href="/contact">Contact</a>
        </li>
        <li className=" p-4 border-indigo-300 bg-white/[.8]">
          <a href="/contact">
            <button className="text-white ease-in-out duration-300">Contact Us</button>
          </a>
        </li>
      </ul>

      {/* navbar menu  */}
      <ul className="hidden md:flex">
        <li className="px-4 hover:text-red-500 duration-300">
          <a href="/">Home</a>
        </li>
        <li className="px-4 hover:text-red-500 duration-300">
          <a href="/about">About</a>
        </li>
        <li className="px-4 hover:text-red-500 duration-300">
          <a href="/services">Sevices</a>
        </li>
        <li className="px-4 hover:text-red-500 duration-300">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="px-4 hover:text-red-500 duration-300">
          <a href="/career">Careers</a>
        </li>
        <li className="px-4 hover:text-red-500 duration-300">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden p-5">
        {!nav ? (
          <AiOutlineMenu size={30} className="cursor-pointer" />
        ) : (
          <AiOutlineClose size={30} className="cursor-pointer" />
        )}
      </div>

      <a href="contact" className="hidden md:block">
        <button className="text-white ease-in-out duration-300">Contact Us</button>
      </a>
    </div>
    
  );
};

export default Navbar;
