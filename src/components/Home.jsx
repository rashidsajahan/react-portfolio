import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div className="w-full h-screen bg-[#011343]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, I'm Rashid</p>
        <h1 className="text text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rashid Sajahan
        </h1>
        <h2 className="text text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-0 max-w-[700px]">
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <buttun className="text-white max-w-[200px] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work 
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
            </span>
          </buttun>
        </div>
      </div>
    </div>
  );
}

export default Home;
