import React from 'react'
import expimg from '../assets/images/ExperienceImg.png'
import ExperienceCard from '../components/ExperienceCard'
import companies from '../data/experienceData'


function Experience() {

    return (
        <section id='experience' className='flex flex-col gap-12 overflow-x-hidden bg-[#1A1A1A] rounded-lg p-10  mx-14 my-32'>
            <div className='flex justify-end items-center gap-4 pr-2'>
            <div className='line'>
            </div>
                <h2 className="tab-title">
                    Experience
                </h2>
            </div>
            <div className='flex justify-between p-5'>
                <div className='w-1/2'>
                    <img src={expimg} className='w-full' alt="" />
                </div>
                <div className='w-1/3 pr-20 flex flex-col gap-4'>
                    {companies.map((element, index) => <ExperienceCard key={index} expInfo={element} />)}

                </div>
            </div>
        </section>
    )
}

export default Experience
