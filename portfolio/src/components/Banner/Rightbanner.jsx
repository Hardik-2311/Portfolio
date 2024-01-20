import React from "react";
// import Banner from './banner'
import { banner } from "../../assets";
const Rightbanner = () => {
  return (
    <div className="relative ">
      <img src={banner} alt="" className="w-[300px] h-[400px] z-10" />
    </div>
  );
};

export default Rightbanner;
