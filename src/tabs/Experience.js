import React from 'react'
import expimg from '../assets/experience_img.png'
import ExperienceCard from '../components/ExperienceCard'

function Experience() {
    return (
        <div className='flex flex-col items-center p-5'>
            <h2 className="tab-title">
                Experience
            </h2>
            <div className='flex justify-between'>
                <div className='w-1/3 pl-20'>
                    <img src={expimg} className='w-full' alt="" />
                </div>
                <div className='w-1/3 pr-20'>
                    <ExperienceCard/>
                </div>
            </div>
        </div>
    )
}

export default Experience
