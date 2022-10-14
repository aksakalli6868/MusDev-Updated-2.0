import React from 'react'
import { AiOutlineHtml5 } from "react-icons/ai"
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

export default function Skills() {
  return (
    <div
      name="skills"
      className="max-w-[1900px] mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-full font-bold flex justify-center flex-col overflow-hidden mr-[400px] "
    >
      <h2 className="text-gray-300 text-5xl mx-auto">Skills</h2>
      <div className="container ml-10 mr-10 text-3xl">
        <ul>
          <div className="flex">
            <AiOutlineHtml5 className="mt-1 text-red-600" /> +{" "}
            <DiCss3 className="mt-1 text-blue-500" />
          </div>
          <div className="w-full bg-gray-200 h-5 mb-6">
            <div className="bg-[#0a192f] h-5" style={{ width: "70%" }}></div>
          </div>
          <h1 className="flex text-yellow-500">
            JavaScript - <DiJavascript1 className="mt-1" />
          </h1>
          <div className="w-full bg-gray-200 h-5 mb-6">
            <div className="bg-[#0a192f] h-5" style={{ width: "65%" }}></div>
          </div>
          <h1 className="flex text-blue-400">
            Tailwind CSS - <SiTailwindcss className="mt-1 ml-1" />
          </h1>
          <div className="w-full bg-gray-200 h-5 mb-6">
            <div className="bg-[#0a192f] h-5" style={{ width: "65%" }}></div>
          </div>
          <h1 className="flex text-blue-800">
            React JS - <FaReact className="mt-1 ml-2" />
          </h1>
          <div className="w-full bg-gray-200 h-5 mb-6 ">
            <div className="bg-[#0a192f] h-5" style={{ width: "55%" }}></div>
          </div>
          {/* <li>Tailwind CSS</li>
          <li>ReactJS</li> */}
        </ul>
      </div>
    </div>
  );
}
