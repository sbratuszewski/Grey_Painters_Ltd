import React from "react";
import jobImage from "../assets/1howmuchpainter.jpg";

const JobAdverts = () => {
  return (
    <div className="w-full px-[8%]">
      <div className="flex flex-wrap bg-transparent text-white drop-shadow-xl py-16">
        <div className="sm:basis-1 grow md:basis-1/2 xl:basis-1/5 bg-indigo-700 px-4 py-2">
          <h3 className="text-md font-semibold uppercase mb-4">Painter and Decorator - Team Leader</h3>
          <p className="text-sm font-light">Gray Painters Ltd - Peterhead</p>
          <p className="text-sm font-light">Salary: from £29,000 a year</p>
          <p className="text-sm font-light">Full-time, pernament - 8h shift <br />Monday to Friday</p>
        </div>
        <div className="sm:basis-1 grow md:basis-1/2 xl:basis-1/5 bg-indigo-600 px-4 py-2">
          <p className="text-sm">
            We are looking for an experienced Painter and Decorator to be Team
            Leader based in Peterhead. This is a permanent role for the right
            candidate. If you are interested to be part of our professional and
            friendly team, then please apply now for an immediate start.
          </p>
        </div>
        <div className="sm:basis-1 grow md:basis-1/2 xl:basis-1/5 bg-indigo-500 px-4 py-2">
          <h3 className="text-md uppercase mb-4">requirements:</h3>
          <ul className="text-sm list-disc pl-3">
            <li>painting: 5 years (preferred)</li>
            <li>hand taping experience</li>
            <li>full driving licence</li>
            <li>good communication and organization skills</li>
            <li>Attention to detail</li>
          </ul>
        </div>
        <div className="sm:basis-1 grow md:basis-1/2 xl:basis-1/5 bg-indigo-400 px-4 py-2">
          <h3 className="text-md uppercase mb-4">Benefits:</h3>
          <ul className="text-sm list-disc pl-3">
            <li>competitive salary</li>
            <li>full-time position with opportunity of overtime</li>
            <li>company van</li>
            <li>
              gthe latest dustless sanding equipment and other tools required
            </li>
          </ul>
        </div>
        <div className="sm:basis-1 grow md:basis-1/2 xl:basis-1/5 relative">
          <img className="h-[100%] hidden lg:block" src={jobImage} alt="painter" />
          <a className="lg:absolute top-[50%] left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]" href="/contact#form">
            <button className="text-xl capitalize bg-blue-500 drop-shadow-sm mt-3 lg:mt-0">apply now</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default JobAdverts;
