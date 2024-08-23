import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

import logo from "./Images/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <nav className="flex flex-col fixed w-full mr- z-40">
        <div className="bg-[#483bdd] py-2 grid grid-auto-fit md:h-[2.5rem] w-full">
          <div className="flex gap-4  text-center w-full mx-auto justify-center">
            <BiLogoFacebook
              className="text-2xl text-[#ffffff] font-bold border-2 rounded-3xl cursor-pointer"
              title="Follow us on facebook"
            />
            <BiLogoInstagram
              className="text-2xl text-[#ae6e3a] font-bold border-2 rounded-3xl border-[#ae6e3a] cursor-pointer"
              title="Follow us on Instagram"
            />
            <BiLogoTwitter
              className="text-2xl text-[#58b7f6] font-bold border-2 rounded-3xl border-[#58b7f6] cursor-pointer"
              title="Follow us on Twitter"
            />
            <BiLogoLinkedin
              className="text-2xl text-[#ffffff] font-bold border-2 rounded-3xl cursor-pointer"
              title="Follow us on Linkedin"
            />
          </div>
          <ul className="md:flex  gap-4 lg:text-[1rem] text-[0.7rem] text-center w-full mx-auto justify-center text-white">
            <li>
              <a href="#" className=" font-bold">
                NEED ASSITANCE?
              </a>
            </li>
            <li>
              <a href="#" className="mx-4 font-bold">
                <span>CONTACT:</span>
                <span className="ml-4">0241720404/0506149300</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="px-6 py-2 md:flex shadow-sm border-b w-full sm:h-[4rem] h-[3.8rem] justify-around  bg-white">
          <img src={logo} alt="" className="w-[6rem] h-[2.2rem]  mx-8" />
          <div
            onClick={handleNav}
            className="fixed right-8 top-[4.5rem] mt-2 md:hidden  text-xl text-[#483bdd] border-2 border-[#483bdd] cursor-pointer"
          >
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul
            className={` md:flex md:items-center md:h- md:pb-0 pb-12 md:mt-0 sm:mt-[-4.5rem] mt-[-3.5rem] h-[] fixed md:static bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in-out opacity-100 ${
              nav ? "top-[10rem]" : "top-[-200px] md:opacity-100 opacity-0"
            }`}
          >
            <li className="md:ml-4 my-10 md:my-0 border-b md:border-0">
              <a
                href="/"
                className="mx-6 font-bold hover:text-[#483bdd] ease-in-out duration-700 text-[#3d4045] "
              >
                Home
              </a>
            </li>
            <li className="md:ml-4 my-10 md:my-0 border-b md:border-0">
              <a
                href="/about"
                className="mx-6 font-bold hover:text-[#483bdd] ease-in-out duration-700 text-[#3d4045] "
              >
                About
              </a>
            </li>
            <li className="md:ml-4 my- md:my-0 border-b md:border-0">
              <a
                href="/contact"
                className="mx-6 font-bold hover:text-[#483bdd] ease-in-out duration-700 text-[#3d4045] "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
