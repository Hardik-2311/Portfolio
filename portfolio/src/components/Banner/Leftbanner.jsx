import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaGithub,
  FaInstagram,
  FaReact,
  FaDocker,
  FaLinkedin,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Leftbanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Tech Lead", "Proessional Coder"],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 5,
    delaySpeed: 2000,
  });
  return (
    <>
      <div className="flex flex-col gap-4">
        <h4 className="text-lg text-center md:text-left text-lightText font-normal uppercase">
          Welcome guys
        </h4>
        <h1 className="text-5xl lgl:text-6xl font-bold text-white">
          Hi I'm <span className="text-designColor">Hardik</span>
        </h1>
        <h2 className="text-3xl lgl:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorColor="#ff014f" />
        </h2>
        <p>
          I am a seasoned coder with expertise in Data Structures and Algorithms
          (DSA). My skills extend to Full Stack development, where I design and
          implement robust solutions. Known for proficiency and a commitment to
          continuous learning, I contribute effectively to high-quality software
          projects.
        </p>
      </div>
      <div className="flex flex-col lgl:flex-row gap-10 items-center w-full">
        <div>
          <h2 className="text-base uppercase font-titleFont text-center mb-4 mt-4">
            Find Me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className="text-base mb-4 mt-4">
          <h2 className="text-base uppercase text-center font-titleFont mb-4 mt-4">
            Skills
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaDocker />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftbanner;
