import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import inspect from "../assets/health-and-safety-inspector.png";
import logoCTB from "../assets/logos/citb_logo.png";

const Inspector = () => {
  return (
    <div className="flex flex-wrap justify-center py-16 bg-custom-navy">
      <div className="md:basis-1/3 text-center my-3 py-16 md:mx-10 drop-shadow-xl rounded-xl bg-white">
        <div className="h-[150px] w-[150px] mx-auto">
          <img
            src={inspect}
            alt="inspector"
            className="border rounded-full border-zinc-800"
          />
        </div>
        <h2 className="capitalize text-xl my-5">NACE Level 2 Inspector</h2>
        <p className="px-5 text-md">
          We have our own NACE Level 2 inspector on-site <br /> to ensure the
          highest quality of our services.
        </p>
        <FaThumbsUp className="mt-5 w-full" size={30} />
      </div>

      <div className="md:basis-1/3 text-center my-3 py-16 md:mx-10 drop-shadow-xl rounded-xl bg-white">
        <div className="h-[150px] w-[200px] mx-auto">
          <a href="https://www.citb.co.uk" target="_blank"><img src={logoCTB} alt="logo" className="translate-y-[50%]"/></a>
        </div>
        <h2 className="capitalize text-xl mb-5">Member of the <br/> Construction Industry Training Board</h2>
        <p className="px-5 text-md">
          In comercial & domestic painting & decorating.
        </p>
        <HiBadgeCheck className="mt-5 w-full" size={40} />
      </div>
    </div>
  );
};

export default Inspector;
