import React from "react";
import HeroImage from "../assets/careers.jpeg";
import CareerArticles from "../components/CareerArticles";
import JobAdverts from "../components/JobAdverts";

const Career = () => {
  return (
    <div className='pb-16'>
      <div className="w-full h-[30vh] overflow-hidden relative drop-shadow-lg">
        <img
          src={HeroImage}
          alt="oilrig"
          className="w-[100%] h-[100%] sm:h-auto absolute top-[50%] translate-y-[-50%]"
        />
        <h1 className="absolute text-4xl uppercase top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-slate-700">
          Job offers
        </h1>
      </div>

      <CareerArticles />
      
      <h2 className='text-2xl uppercase text-center'>recent offers:</h2>

      <JobAdverts />
    </div>
  );
};

export default Career;
