import React from 'react'

export default function About () {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-col-2 gap-8">
          <div className="text-left pt-[130px] pb-8 pl-4">
            <p className="text-4xl font-bold inline ">
              <span className='border-b-4 border-pink-500 md:flex justify-center items-center'>About</span> 
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl sm:text-right font-bold">
            <p>
              Hi, my name is Ahmed. Nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a passionate about developing magnificient software that
              improves the lives of those around me. I specialize in creating
              software for clients ranging from individuals and small-businesses
              all the way to large enterprise coopreations. What would you do if
              you had a software export available at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
