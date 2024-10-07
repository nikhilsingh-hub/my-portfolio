import React from "react";
import { backendLogo, frontendLogo, uiLogo, ExercisingBoy } from '../context'

function About() {

  return (

    <section className="flex flex-col gap-8 md:gap-12 overflow-x-hidden bg-[#1A1A1A] rounded-lg p-2 pt-6 pb-6 md:p-10 mx-4 md:mx-14 my-10 md:my-32" id="about">
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pr-2'>
        <h2 className="tab-title font-playpen sm:text-xl text-white">
          About
        </h2>
        <div className='line'></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        <img
          src={ExercisingBoy}
          alt="Me sitting with a laptop"
          className="w-full sm:w-2/3 md:w-1/3"
        />
        <ul className="text-white flex flex-col gap-8 sm:gap-12 mt-5 p-1 sm:p-0">
          <li className="flex flex-col sm:flex-row items-start sm:items-center rounded-xl list-none p-4 sm:p-6 bg-gradient-to-r from-[#0D0D0D] to-transparent hover:bg-gradient-to-r hover:from-[#0D0D0D] hover:to-[#0D0D0D] transition-all duration-400">
            <img src={backendLogo} alt="Backend icon" className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4" />
            <div className="ml-0 sm:ml-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-400 font-playpen">Backend Developer</h3>
              <p className="text-base sm:text-xl font-sniglet">
                I have a strong background in architecting high-performance, scalable server-side solutions and RESTful APIs, with a focus on minimizing latency and maximizing throughput.
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row items-start sm:items-center rounded-xl list-none p-4 sm:p-6 bg-gradient-to-r from-[#0D0D0D] to-transparent hover:bg-gradient-to-r hover:from-[#0D0D0D] hover:to-[#0D0D0D] transition-all duration-1000">
            <img src={frontendLogo} alt="Frontend icon" className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4" />
            <div className="ml-0 sm:ml-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-400 font-playpen">Frontend Developer</h3>
              <p className="text-base sm:text-xl font-sniglet">
                I specialize in crafting dynamic, mobile-first user interfaces with an emphasis on cross-browser compatibility and performance optimization.
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row items-start sm:items-center rounded-xl list-none p-4 sm:p-6 bg-gradient-to-r from-[#0D0D0D] to-transparent hover:bg-gradient-to-r hover:from-[#0D0D0D] hover:to-[#0D0D0D] transition-all duration-400">
            <img src={uiLogo} alt="UI Design icon" className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4" />
            <div className="ml-0 sm:ml-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-400 font-playpen">UI Designer</h3>
              <p className="text-base sm:text-xl font-sniglet">
                I've engineered pixel-perfect, conversion-optimized landing pages and established scalable, reusable design systems to streamline UI/UX consistency across projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

  );
}

export default About;
