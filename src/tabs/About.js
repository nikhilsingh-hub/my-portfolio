import React from "react";
import { ExercisingBoy } from '../context'
import configLoader from '../utils/configLoader.js';

function About() {
  const aboutSection = configLoader.getAboutSection();

  return (

    <section className="relative bg-[#212121] rounded-lg p-6 sm:p-8 lg:p-10 mx-4 sm:mx-6 md:mx-10 lg:mx-14 my-16 sm:my-24 lg:my-32" id="about">
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pr-2'>
        <h2 className="tab-title font-playpen sm:text-xl text-white">
          {aboutSection.title}
        </h2>
        <div className='line'></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        <img
          src={ExercisingBoy}
          alt="Me sitting with a laptop"
          className="w-full sm:w-2/3 md:w-1/3"
        />
        <ul className="text-white flex flex-col gap-8 sm:gap-12 mt-5">
          {aboutSection.roles.map((role, index) => (
            <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center rounded-xl list-none p-4 sm:p-6 bg-gradient-to-r from-[#0D0D0D] to-transparent hover:bg-gradient-to-r hover:from-[#0D0D0D] hover:to-[#0D0D0D] transition-all duration-1000">
              <img src={role.iconComponent} alt={`${role.title} icon`} className="w-12 h-12 mb-4 sm:mb-0 sm:mr-4" />
              <div className="ml-0 sm:ml-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-orange-400 font-playpen">{role.title}</h3>
                <p className="text-lg sm:text-xl font-sniglet">
                  {role.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

  );
}

export default About;
