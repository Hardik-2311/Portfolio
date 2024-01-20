import React from "react";
// import Banner from './banner'
import { banner } from "../../assets";
const Rightbanner = () => {
  return (
    <div className="relative ">
      <img src={banner} alt="" className="w-[250px] h-[350px] lgl:w-[300px] lgl:h-[400px] z-10" />
    </div>
  );
};

export default Rightbanner;
