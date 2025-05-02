import React from "react";

const Heading = ({title, subtitle}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center  my-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-thin ">{title}</h1>
      <p className="text-xs md:text-base text-gray-600 text-center font-thin mt-2">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
