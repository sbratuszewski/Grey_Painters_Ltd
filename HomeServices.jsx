import React from "react";
import bgImage1 from "../assets/Man-doing-blasting-768x451.png";
import bgImage2 from "../assets/1howmuchpainter.jpg";
import bgImage3 from "../assets/Industrial-Paint--Coatingbef90311.jpg";

const HomeServices = () => {
  return (
    <div>
      {/* articles */}
      <div className="w-full">
        <div className="w-full text-center">
          <h2 className="uppercase text-2xl px-2 py-16">Our services</h2>
        </div>
        <div className="flex flex-wrap px-[8%] pb-14 justify-between">
          <p className="py-2 lg:basis-1/4">
            Welcome to Gray Painters, the premier provider of high-quality
            painting and coating solutions for the Oil and Gas and renewable
            industries in the North East Scotland.
          </p>
          <span className="w-[1px] h-20 bg-zinc-500 my-auto hidden lg:block"></span>
          <p className="py-2 lg:basis-1/4">
            With over 40 years of experience and a commitment to delivering
            results on time and at competitive prices, we are the trusted
            partner of choice for companies operating in this demanding and
            challenging environment.
          </p>
          <span className="w-[1px] h-20 bg-zinc-500 my-auto hidden lg:block"></span>
          <p className="py-2 lg:basis-1/4">
            Our services are designed to provide a comprehensive solution that
            protects your assets and ensures they operate at peak performance,
            no matter what the conditions.
          </p>
        </div>
      </div>
      {/* services */}
      <div className="bg-custom-navy py-16">
        <div className="flex flex-wrap text-center h-[50vh] drop-shadow-xl">
          <div className="basis-full	md:basis-1/3 relative w-full bg-gradient-to-tl from-slate-800 to-slate-400 overflow-hidden">
            <img src={bgImage1} alt="blasting" className="w-full h-full object-cover absolute mix-blend-overlay hover:scale-105 duration-700" />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="uppercase text-white text-2xl py-5 mb-5 md:mb-20">
                shot blasting
              </h2>
              <a href="/services">
                <button className="text-xl capitalize ease-in-out duration-300">read more</button>
              </a>
            </div>
          </div>
          <div className="basis-full	md:basis-1/3 relative w-full bg-gradient-to-tl from-slate-800 to-slate-400 overflow-hidden">
          <img src={bgImage3} alt="coating" className="w-full h-full object-cover absolute mix-blend-overlay hover:scale-105 duration-700" />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="uppercase text-white text-2xl py-5 mb-5 md:mb-20">
                paint coating
              </h2>
              <a href="/services">
                <button className="text-xl capitalize ease-in-out duration-300">read more</button>
              </a>
            </div>
          </div>
          <div className="basis-full	md:basis-1/3 relative w-full bg-gradient-to-tl from-slate-800 to-slate-400 overflow-hidden">
          <img src={bgImage2} alt="painting" className="w-full h-full object-cover absolute mix-blend-overlay hover:scale-105 duration-700" />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="uppercase text-white text-2xl py-5 mb-5 md:mb-20">
                painting & decorating
              </h2>
              <a href="/services">
                <button className="text-xl capitalize ease-in-out duration-300">read more</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
