import React from "react";
import Title from "../../layouts/Title";
import ProjectCard from "../../layouts/ProjectCard";
import {banner} from "../../assets"

const Projects = () => {
  return (
    <section id="projects" className=" py-10  w-[90%] mx-auto border-b-[1px] border-b-white">
      <div className="flex justify-center items-center text-center">
        <Title title="Here is my portfolio" desc="My projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-20">
      <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banner}
        />
        <ProjectCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banner}
        />
        <ProjectCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banner}
        />
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banner}
        />
        <ProjectCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banner}
        />
        <ProjectCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banner}
        />
      </div>
    </section>
  );
};

export default Projects;
