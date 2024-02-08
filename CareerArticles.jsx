import React from "react";

const CareerArticles = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex flex-wrap px-[8%] py-[10vh] justify-between">
          <p className="py-2 lg:basis-1/4">
            At Gray Painters, we are always looking for talented and motivated
            individuals to join our team. If you are passionate about paint and
            coatings industry and want to work with a company that values
            excellence and dedication, we would love to hear from you.
          </p>
          <span className="w-[1px] h-20 bg-zinc-500 my-auto hidden lg:block"></span>
          <p className="py-2 lg:basis-1/4">
            Our team is made up of experts in the field, and we are committed to
            providing ongoing training and development opportunities to help our
            employees grow and succeed.
          </p>
          <span className="w-[1px] h-20 bg-zinc-500 my-auto hidden lg:block"></span>
          <p className="py-2 lg:basis-1/4">
            Browse our current job openings and apply today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerArticles;
