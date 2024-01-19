import React from "react";
import Leftbanner from "./Leftbanner";
import Rightbanner from "./Rightbanner";


const Banner = () => {
  
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <div className="flex justify-between w-[90%] mx-auto gap-10">
        <div className="w-1/2 flex flex-col gap-5">
          <Leftbanner />
        </div>
        <div className="w-1/2">
          <Rightbanner />
        </div>
      </div>
    </section>
  );
};

export default Banner;
