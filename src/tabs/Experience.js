import React from 'react'
import expimg from '../assets/images/ExperienceImg.png'
import ExperienceCard from '../components/ExperienceCard'
import companies from '../data/experienceData'
import configLoader from '../utils/configLoader.js'

function Experience() {
    const experienceSection = configLoader.getExperienceSection();

    return (
        <section id='experience' className='flex flex-col gap-6 md:gap-8 overflow-x-hidden bg-[#1A1A1A] rounded-lg p-6 md:p-8 mx-4 md:mx-14 my-10 md:my-20'>
            {/* Section Header */}
            <div className='flex justify-center md:justify-end items-center gap-4 pr-2'>
                <div className='line'></div>
                <h2 className="tab-title">
                    {experienceSection.title}
                </h2>
            </div>
        
            <div className='flex flex-col-reverse md:flex-row justify-between p-2 md:p-4 gap-6 md:gap-8'>
                {/* Experience Image */}
                <div className='w-full md:w-1/2'>
                    <img 
                        src={expimg} 
                        className='w-full h-auto' 
                        alt="Experience illustration" 
                    />
                </div>
            
                {/* Experience Cards */}
                <div className='w-full md:w-1/2 md:pl-4 flex flex-col gap-4'>
                    {companies.map((element, index) => (
                        <ExperienceCard key={index} expInfo={element} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
