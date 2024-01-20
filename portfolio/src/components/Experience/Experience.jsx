import React from "react";
import Title from "../../layouts/Title";
import { data } from "./ExperieneData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-[90%] mx-auto py-20 border-b-[1px] border-b-white"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          desc="Experience"
          title="These are the technologies i have worked with"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8 text-center px-12 sm:px-0">
        {data.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto py-2" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
