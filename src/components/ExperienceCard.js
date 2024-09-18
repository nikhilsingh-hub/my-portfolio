import React, { useRef, useState } from 'react';
import IsVisible from '../hooks/isVisible';
import dropdown from '../assets/dropdown.svg'
import pullup from '../assets/pullup.svg'

function ExperienceCard({expInfo}) {
  const cardRef = useRef(null);
  const isVisible = IsVisible(cardRef);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

    const onClickButton = () => {
        setIsDetailsVisible(prev => !prev)
    }

  return (
    <div
      ref={cardRef}
      className='border-2 border-gray-800 h-fit w-full flex flex-col items-center pt-6 pl-6 pr-6 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg'
    >
      <div className={`experiencecard ${isVisible?'visible':''}`}
      >
        {/* Company Name */}
        <div className='border-b-2 border-[#873BBF] pb-4 mb-4'>
          <a
            href=''
            className='flex items-center gap-4'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={expInfo.CompanyIcon}
              className='w-10 h-10 object-cover rounded-lg border-2 border-[#873BBF] shadow-md'
              alt='Valuable Group Logo'
            />
            <span className='text-[#873BBF] text-2xl font-extrabold uppercase'>
              {expInfo.CompanyName}
            </span>
          </a>
        </div>

        {/* Date */}
        <div className='flex justify-end font-playpen text-gray-400 text-sm italic mb-2'>
          MAY, 2023 - Present
        </div>

        {/* Designation */}
        <div className='flex justify-end font-playpen text-[#F0A500] font-semibold text-lg mb-4'>
          <span>{`Designation : ${expInfo.Designation}`}</span>
        </div>
        {/* Tech Stacks */}
        <div className={`text-white tech-details ${isDetailsVisible?'visible':''}`}>
          <h3 className='text-xl text-[#873BBF] font-bold mb-2'>Tech Stacks:</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {expInfo.tech_stacks.map((element, index) => {
                return (
                    <div key={index}>
                    <span className='font-semibold'>{`${element.name}: `}</span>
                    <p className='text-gray-400'>{element.stacks}</p>
                  </div>
                )
            })}
          </div>
        </div>
      </div>
      <div className=''>
        <button className='text-white flex  justify-center items-center gap-2' onClick={onClickButton}>{isDetailsVisible?<span className='text-red-500'>Less</span> : <span className='text-green-300'>More</span> }<img src={`${isDetailsVisible?pullup:dropdown}`} className='h-4 w-4' alt="" /></button>
      </div>
    </div>
  );
}

export default ExperienceCard;
