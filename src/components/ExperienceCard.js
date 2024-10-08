import React, { useRef, useState } from 'react';
import IsVisible from '../hooks/isVisible';
import dropdown from '../assets/svg/dropdown.svg'
import pullup from '../assets/svg/pullup.svg'

function ExperienceCard({ expInfo }) {
  const cardRef = useRef(null);
  const isVisible = IsVisible(cardRef);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

  const onClickButton = () => {
    setIsDetailsVisible(prev => !prev)
  }

  return (
    <div
      ref={cardRef}
      className='border-2 border-orange-400 h-fit w-full flex flex-col items-center pt-6 px-6 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg transition-all duration-500'
    >
      <div className={`popupanimation ${isVisible ? 'play' : ''}`}>
        {/* Company Name */}
        <div className='border-b-2 border-orange-400 pb-4 mb-4 w-full text-center'>
          <a
            href=''
            className='flex items-center justify-center gap-4 font-playpen'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={expInfo.CompanyIcon}
              className='w-10 h-10 object-cover rounded-lg border-2 border-orange-400 shadow-md p-2'
              alt='Logo'
            />
            <span className='text-orange-400 text-xl md:text-2xl font-extrabold uppercase'>
              {expInfo.CompanyName}
            </span>
          </a>
        </div>

        {/* Date */}
        <div className='flex justify-end font-sniglet text-gray-400 text-sm italic mb-2'>
          MAY, 2023 - Present
        </div>

        {/* Designation */}
        <div className='flex justify-end font-playpen text-[#F0A500] font-semibold text-md md:text-lg mb-4'>
          <span>{`Designation : ${expInfo.Designation}`}</span>
        </div>

        {/* Tech Stacks */}
        <div className={`text-white tech-details ${isDetailsVisible ? 'visible' : ''}`}>
          <h3 className='text-lg md:text-xl text-[#F0A500] font-playpen mb-2'>Tech Stacks:</h3>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
            {expInfo.tech_stacks.map((element, index) => (
              <div key={index}>
                <span className='font-semibold font-akaya'>{`${element.name}: `}</span>
                <p className='text-gray-400 font-sniglet'>{element.stacks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show More/Less Button */}
      <div className='mt-4'>
        <button className='text-white flex justify-center items-center gap-2' onClick={onClickButton}>
          {isDetailsVisible ? (
            <span className='text-red-500'>Less</span>
          ) : (
            <span className='text-green-300'>More</span>
          )}
          <img
            src={`${isDetailsVisible ? pullup : dropdown}`}
            className='h-4 w-4'
            alt=""
          />
        </button>
      </div>
    </div>

  );
}

export default ExperienceCard;
