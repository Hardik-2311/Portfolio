import React from "react";
import Leftbanner from "./Leftbanner";
import Rightbanner from "./Rightbanner";


const Banner = () => {
  
  return (
    <section
      id="home"
      className="w-[90%] mx-auto pb-10 border-b-[1px] border-b-white pt-10 flex items-center "
    >
      <div className="flex flex-col lgl:flex-row justify-between w-full gap-10">
        <div className=" w-full lgl:w-1/2 flex flex-col gap-5">
          <Leftbanner />
        </div>
        <div className="w-full lgl:w-1/2 flex justify-center items-center shadow-shadowOne">
          <Rightbanner />
        </div>
      </div>
    </section>
  );
};

export default Banner;
