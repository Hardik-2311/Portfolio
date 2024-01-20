import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../Constants";
console.log(navLinksdata);
const Navbar = () => {
  return (
    <div className="wrapper sticky z-50 bg-bodyColor top-0 flex justify-between items-center w-full px-16 h-20 mx-auto font-titleFont border-b-[1px] border-b-white">
      <div className="font-tileFont text-3xl font-bold  w-full flex justify-center items-center lgl:block">
        Hardik <span>{" "}</span><span className="text-designColor">Narang</span>
      </div>
      <div >
        <ul className=" items-center gap-10  hidden lgl:flex">
          {navLinksdata.map((data) => {
            return (
              <li
                key={data.id}
                className="cursor-pointer text-base  font-normal text-gray-400 tracking-wide hover:text-designColor duration-300"
              >
                <Link
                  activeClass="active"
                  to={data.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
