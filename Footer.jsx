import React from "react";
import logoFooter from "../assets/logos/logo-long.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPlace, MdAlternateEmail, MdOutlineAccessTime } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full px-4 text-white bg-slate-800">
      <div className="sm:flex justify-around py-16 max-w-[992px] mx-auto pl-4 md:pl-0">
        <div className="text-white my-auto mb-16 md:mb-0">
          <a href="/">
            <img
              src={logoFooter}
              alt="logo"
              className="h-[60px] cursor-pointer rounded mb-10 mx-auto"
            />
          </a>
          <ul>
            <li className="py-2 text-sm hover:text-red-400 ease-in-out duration-300">
              <a href="/services">Services</a>
            </li>
            <li className="py-2 text-sm hover:text-red-400 ease-in-out duration-300">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="py-2 text-sm hover:text-red-400 ease-in-out duration-300">
              <a href="/career">Careers</a>
            </li>
            {/* <li className="py-2 text-sm text-slate-600">
              <a href="/">Admin</a>
            </li> */}
            <li className="py-2 text-base mt-8">
              <a href="tel:01651843203">
                <button className="uppercase px-5 py-2 ease-in-out duration-300">Call Us</button>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <ul>
            <li className="py-2 flex items-center gap-5 border-b border-slate-700">
              <BsFillTelephoneFill size={30} />
              <div>
                <p className="mb-1">Phone:</p>
                <a href="tel:01651843203" classsName="text-sm">
                  01651843203
                </a>
              </div>
            </li>
            <li className="py-2 flex items-center gap-5 border-b border-slate-700">
              <MdPlace size={30} />
              <div>
                <p className="mb-1">Address:</p>
                <a
                  href="https://goo.gl/maps/9STPwzG34aRXzwFm8"
                  target="-blank"
                  classsName="text-sm"
                >
                  <p className="text-sm">Gray Painters LTD,</p>
                  <p className="text-sm">Tillycorthie, Udny,</p>
                  <p className="text-sm">Ellon AB41 6SD</p>
                </a>
              </div>
            </li>
            <li className="py-2 flex items-center gap-5 border-b border-slate-700">
              <MdAlternateEmail size={30} />
              <div>
                <p className="mb-1">Email:</p>
                <a href="mailto: marygray@graypaintersltd.co.uk" classsName="text-sm">
                  marygray@graypaintersltd.co.uk
                </a>
              </div>
            </li>
            <li className="py-2 flex items-center gap-5">
              <MdOutlineAccessTime size={30} />
              <div>
                <p className="mb-1">Opening time:</p>
                <a
                  href="https://goo.gl/maps/9STPwzG34aRXzwFm8"
                  target="-blank"
                  classsName="text-sm"
                >
                  <p className="text-sm">Mon-Thu: 8am-4pm</p>
                  <p className="text-sm">Friday: 8am-3:30pm</p>
                  <p className="text-sm">Sat-Sun: Closed</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <a href="https://stanbrat.co.uk" target="_blank" rel="noreferrer" className="text-xs text-slate-400 mx-auto py-5 hover:text-slate-500 duration-300">
          Gray Painters Ltd &copy; 2023
        </a>
      </div>
    </div>
  );
};

export default Footer;
