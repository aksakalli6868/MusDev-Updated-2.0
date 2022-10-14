import { Link } from "react-scroll";
import React from "react";
const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 text-gray border-pink-600">
            Projects
          </p>
          <p className="pt-4 text-gray-300 text-xl">
            Check out of my recent work!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 hover:transition-all duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS Project
              </span>
              <div className="pt-8 text-center">
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </Link>
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 hover:transition-all duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS Project
              </span>
              <div className="pt-8 text-center">
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </Link>
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 hover:transition-all duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS Project
              </span>
              <div className="pt-8 text-center">
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </Link>
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 hover:transition-all duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS Project
              </span>
              <div className="pt-8 text-center">
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </Link>
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 hover:transition-all duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS Project
              </span>
              <div className="pt-8 text-center">
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </Link>
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 hover:transition-all duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS Project
              </span>
              <div className="pt-8 text-center">
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Demo
                  </button>
                </Link>
                <Link to="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
