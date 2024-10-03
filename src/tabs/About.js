import React from "react";
import { backendLogo, frontendLogo, uiLogo, ExercisingBoy } from '../context'

function About() {

  return (

    <section className="relative bg-[#212121] rounded-lg p-10  mx-14 my-32" id="about">
      <div className='flex items-center gap-4 pr-2'>

        <h2 className="tab-title">
          About
        </h2>
        <div className='line'></div>
      </div>
      <div className="flex flex-row items-center gap-8">
        {/* <div> */}
          {/* <div className="bg-[#0D0D0D] w-[25vw] h-[25vh] rounded-t-full shadoweffect1 relative"> */}
            <img
              src={ExercisingBoy}
              alt="Me sitting with a laptop"
              className="w-1/3"
            />
          {/* </div> */}
        {/* </div> */}
        <ul className="text-white flex flex-col gap-12 mt-5">
          <li className="flex flex-row items-center rounded-xl list-none p-6 bg-gradient-to-r from-[#0D0D0D] to-transparent hover:bg-gradient-to-r hover:from-[#0D0D0D] hover:to-[#0D0D0D] transition-all duration-1000">
            <img src={frontendLogo} alt="Cursor icon" className="w-12 h-12" />
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-orange-400">Frontend Developer</h3>
              <p className="text-xl">
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center rounded-xl list-none p-6 bg-gradient-to-r from-[#0D0D0D] to-transparent hover:bg-gradient-to-r hover:from-[#0D0D0D] hover:to-[#0D0D0D] transition-all duration-400">
            <img src={backendLogo} alt="Server icon" className="w-12 h-12" />
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-orange-400">Backend Developer</h3>
              <p className="text-xl">
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center rounded-xl list-none p-6 bg-gradient-to-r from-[#0D0D0D] to-transparent hover:bg-gradient-to-r hover:from-[#0D0D0D] hover:to-[#0D0D0D] transition-all duration-400">
            <img src={uiLogo} alt="UI icon" className="w-12 h-12" />
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-orange-400">UI Designer</h3>
              <p className="text-xl">
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
