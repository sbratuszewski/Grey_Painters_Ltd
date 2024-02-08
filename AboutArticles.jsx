import React from "react";

const AboutArticles = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex flex-wrap px-[8%] py-[10vh] justify-between">
          <p className="py-2 lg:basis-1/4">
            At Gray Painters, we are a family-owned business with a proud
            tradition of delivering excellence in the Oil and Gas industry.
          </p>
          <span className="w-[1px] h-20 bg-zinc-500 my-auto hidden lg:block"></span>
          <p className="py-2 lg:basis-1/4">
            Our team of experts is led by a NACE Level 2 inspector and we are
            equipped with the latest technologies and techniques to provide a
            full range of painting and coating services. Whether you need epoxy,
            polyurethane, non-slip, subsea, topside, splash zone, or
            anti-fouling pain coatings, we have the expertise and equipment to
            meet your needs.
          </p>
          <span className="w-[1px] h-20 bg-zinc-500 my-auto hidden lg:block"></span>
          <p className="py-2 lg:basis-1/4">
            We use only the finest products from leading manufacturers such as
            Hempel, International Paint, PPG, and Sigma Coatings, so you can be
            confident that your assets are in the best hands. Custom coatings
            are also available, should you require a specific coating that fits
            your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutArticles;
