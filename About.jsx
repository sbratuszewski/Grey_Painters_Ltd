import React from "react";
import AboutArticles from "../components/AboutArticles";
import Testimonials from "../components/Testimonials";
import Inspector from "../components/Inspector";
import heroImage from "../assets/WDI_87.jpeg";

const About = () => {
  return (
    <div>
      <div className="w-full h-[30vh] overflow-hidden relative drop-shadow-lg">
        <img src={heroImage} alt="oilrig" className="w-auto md:w-[100%] h-[100%] lg:h-auto absolute top-0" />
        <h1 className="absolute text-4xl uppercase top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-slate-700">About Us</h1>
      </div>
      <AboutArticles />
      <Inspector />
      <Testimonials />
    </div>
  );
};

export default About;
