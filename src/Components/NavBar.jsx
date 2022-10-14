import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

import Logo from "../Assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-24 flex justify-between items-center px-4 text-gray-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
      <div>
        <Link to="home" smooth={true} offset={50} duration={500}>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "200px" }}
            className="rounded-lg cursor-pointer"
          />
        </Link>
      </div>

      <ul className="hidden md:flex mr-10 text-xl ml-24">
        <Link
          className="cursor-pointer hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2 mr-8 md:mr-3"
          to="home"
          smooth={true}
          offset={50}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2 mr-8 md:mr-3"
          to="about"
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
        <Link
          className="cursor-pointer hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2 mr-8 md:mr-3"
          to="skills"
          smooth={true}
          offset={50}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="cursor-pointer hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2 mr-8 md:mr-3"
          to="projects"
          smooth={true}
          offset={50}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="cursor-pointer hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2 mr-8 md:mr-3"
          to="contact"
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </ul>

      {/* Hamburger Menu */}
      <button className="md:hidden z-10 text-4xl" onClick={() => handleClick()}>
        {!nav ? <GiHamburgerMenu /> : <AiOutlineClose />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">
          <Link
            className="hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2"
            onClick={handleClick}
            to="home"
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            className="hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2"
            onClick={handleClick}
            to="about"
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            className="hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2"
            onClick={handleClick}
            to="skills"
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            className="hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2"
            onClick={handleClick}
            to="projects"
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            className="hover:bg-indigo-400 transition-all duration-200 rounded-xl p-2"
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
