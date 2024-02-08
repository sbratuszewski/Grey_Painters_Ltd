import React from "react";

const GalleryArticles = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap px-[8%] py-[10vh] justify-between">
        <p className="py-2 lg:basis-1/4">
          Take a look at some of our recent projects and see the results of our
          commitment to delivering high-quality coating solutions to the Oil and
          Gas and Renewables industries.
        </p>
        <span className="w-[1px] h-20 bg-zinc-500 my-auto hidden lg:block"></span>
        <p className="py-2 lg:basis-1/4">
          Our gallery showcases a range of projects, including shot blasting,
          paint coatings, and more, so you can see the results for yourself.
        </p>
        <span className="w-[1px] h-20 bg-zinc-500 my-auto hidden lg:block"></span>
        <p className="py-2 lg:basis-1/4">
          Whether you are looking for inspiration or simply want to see the
          level of quality we deliver, our gallery is the perfect place to
          start.
        </p>
      </div>
    </div>
  );
};

export default GalleryArticles;
