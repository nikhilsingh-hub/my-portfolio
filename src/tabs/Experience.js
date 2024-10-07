import React from 'react'
import expimg from '../assets/images/ExperienceImg.png'
import ExperienceCard from '../components/ExperienceCard'
import companies from '../data/experienceData'


function Experience() {

    return (
        <section id='experience' className='flex flex-col gap-8 md:gap-12 overflow-x-hidden bg-[#1A1A1A] rounded-lg p-2 pt-6 pb-6 md:p-10 mx-4 md:mx-14 my-10 md:my-32'>
        <div className='flex justify-center md:justify-end items-center gap-4 pr-2'>
          <div className='line'></div>
          <h2 className="tab-title">
            Experience
          </h2>
        </div>
      
        <div className='flex flex-col-reverse md:flex-row justify-between p-5 gap-8 md:gap-0'>
          <div className='w-full md:w-1/2'>
            <img src={expimg} className='w-full h-auto' alt="" />
          </div>
      
          <div className='w-full md:w-1/3 md:pr-20 flex flex-col gap-4'>
            {companies.map((element, index) => (
              <ExperienceCard key={index} expInfo={element} />
            ))}
          </div>
        </div>
      </section>
      
    )
}

export default Experience
