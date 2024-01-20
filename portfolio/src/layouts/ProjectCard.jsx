import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const ProjectCard = ({ title, des, src }) => {
  return (
    <div className="w-full px-8 h-100 py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group gap-4">
      <div className="w-full  overflow-hidden rounded-lg flex flex-col">
        <img
          src={src}
          alt=""
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
      <div className="w-full mt-5 flex justify-between items-center">
        <div>
          <h2 className="text-designColor font-bold font-titleFont text-sm ">
            {" "}
            {title}
          </h2>
        </div>

        <div className="flex gap-2">
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <BsGithub />
          </span>
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <FaGlobe />
          </span>
        </div>
      </div>
      <div><p className="text-sm tracking-wide hover:text-gray-100 duration-300">{des}</p></div>
    </div>
  );
};

export default ProjectCard;
