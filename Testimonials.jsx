import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className="w-full py-16 text-center bg-zinc-200">
      <h2 className="uppercase text-2xl px-2">testimonials</h2>
      <div className="flex flex-wrap justify-around py-16">
        <di className="lg:basis-1/4 xlg:basis-1/6 rounded bg-white p-5 relative my-10 mx-2 lg:mx-0 drop-shadow-2xl">
          <FaQuoteRight size={30} className="text-indigo-900 w-full mb-4" />
          <p className="text-left italic">
            DJR Engineering have been fortunate to use the services of Gray
            Painters for the last 20 plus years for all our Blasting/Painting
            requirements. No job too small or too large with this family run
            firm providing an excellent service every time, a pleasure to deal
            with and we look forward to sending many more projects their way
            over the coming years.
          </p>
          <a className="text-sm text-blue-400" href="#">Read pdf</a> 
          <div className="flex text-yellow-600 w-full justify-center mt-2">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p className="mt-3 font-light"><a className="hover:text-red-500" href="http://djrengineering.co.uk" target="_blank"> DJR Engineering</a></p>
          <span className="testimonial"></span>
        </di>
        <di className="lg:basis-1/4 xlg:basis-1/6 rounded bg-white p-5 relative my-10  mx-2 lg:mx-0 drop-shadow-2xl">
          <FaQuoteRight size={30} className="text-indigo-900 w-full mb-4" />
          <p className="text-left italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
            aliquam etiam erat velit scelerisque in dictum non.
          </p>
          <div className="flex text-yellow-600 w-full justify-center mt-2">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p className="mt-3 font-light">Company Name</p>
          <span className="testimonial"></span>
        </di>
        <di className="lg:basis-1/4 xlg:basis-1/6 rounded bg-white p-5 relative my-10  mx-2 lg:mx-0 drop-shadow-2xl">
          <FaQuoteRight size={30} className="text-indigo-900 w-full mb-4" />
          <p className="text-left italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
            aliquam etiam erat velit scelerisque in dictum non.
          </p>
          <div className="flex text-yellow-600 w-full justify-center mt-2">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p className="mt-3 font-light">Company Name</p>
          <span className="testimonial"></span>
        </di>
      </div>
    </div>
  );
};

export default Testimonials;
