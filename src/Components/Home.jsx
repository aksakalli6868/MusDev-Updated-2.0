import React from 'react'
import Ahmed from "../Assets/Ahmed.jpeg"

import { Link } from 'react-scroll';

import { AiOutlineArrowRight } from "react-icons/ai"

export default function Home() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-between">
        <img
          src={Ahmed}
          alt="Ahmed"
          className="rounded-xl w-[300px] mt-[150px] md:w-[400px]"
        />
        <div className='mt-10'>
          <p className="text-[#ccd6f6]">Hello, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Ahmed Celen
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            and I am a Web Developer
          </h2>
          <p className="text-[#ccd6f6] py-4 max-w-[700px] ">
            I am an enthuasiastic programmer, who will deliver you your dream
            project with unique features.
          </p>
        </div>

        <div>
          <Link to="projects" smooth={true} offset={50} duration={500}>
            <button className="text-white rounded-lg group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 duration-200 transition-all hover:border-pink-600">
              View Projects
              <span className="group-hover:rotate-90 duration-300 grou">
                <Link to="projects">
                  <AiOutlineArrowRight className="ml-3" />
                </Link>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
