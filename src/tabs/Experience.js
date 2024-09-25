import React from 'react'
import expimg from '../assets/experience_img.png'
import ExperienceCard from '../components/ExperienceCard'
import companyIcon from '../assets/valuablegroup.jpg';
import selfLearnIcon  from '../assets/selfLearn.svg'

function Experience() {
    const companies = [{
        CompanyName: 'Valuable Group', CompanyIcon: companyIcon, Date: 'MAY, 2023 - Present', Designation: 'Software Developer',
        isTechDetailsAvailable: true, tech_stacks: [{ name: 'Software Dev', stacks: 'JavaScript, Node.js, PHP, React' },
        { name: 'Android Dev', stacks: 'Android Studio, JAVA' },
        { name: 'Database', stacks: 'MySql, MSSQL, MongoDB' },
        { name: 'Others', stacks: 'Wireshark, Documentation' }
        ]
    },

    {
        CompanyName: 'Self Employed', CompanyIcon: selfLearnIcon, Date: 'Aug, 2019 - Present', Designation: 'Coding and Learning everyday',
        isTechDetailsAvailable: true, tech_stacks: [{ name: 'Programming Languages', stacks: 'JavaScript, C++, PHP, JAVA, Python' },
        { name: 'Frameworks & Technologies', stacks: 'React, NextJs, NodeJs, Android Dev, Deep Learning ' },
        { name: 'Core Concepts & Tools', stacks: 'DSA, Git, SVN, OS, CN' }
        ]
    }]
    return (
        <section id='experience' className='flex flex-col gap-12 p-2 overflow-x-hidden bg-[#1A1A1A]'>
            <div className='flex justify-end pr-2'>
                <h2 className="tab-title">
                    Experience
                </h2>
            </div>
            <div className='flex justify-between p-5'>
                <div className='w-1/3 pl-20'>
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
