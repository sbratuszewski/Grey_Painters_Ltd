import React from "react";
import heroImage from "../assets/rig-g7542d9b7a_1920.jpeg";
import ServicesArticle from "../components/ServicesArticle";
import ServicesDiagram from "../components/ServicesDiagram";
import Brands from '../components/Brands'

const Services = () => {
  return (
    <div>
      <div className="w-full h-[30vh] overflow-hidden relative drop-shadow-lg">
        <img
          src={heroImage}
          alt="oilrig"
          className="w-[100%] h-[100%] sm:h-auto absolute top-[50%] translate-y-[-50%]"
        />
        <h1 className="absolute text-4xl text-white uppercase top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">Our Services</h1>

      </div>

      <ServicesArticle />
      <ServicesDiagram />
      <Brands />
    </div>
  );
};

export default Services;
