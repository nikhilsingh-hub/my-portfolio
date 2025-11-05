import React, { useRef, useState } from 'react';
import IsVisible from '../hooks/isVisible';
import dropdown from '../assets/svg/dropdown.svg'
import pullup from '../assets/svg/pullup.svg'

function ExperienceCard({ expInfo, index }) {
  const cardRef = useRef(null);
  const isVisible = IsVisible(cardRef);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

  const onClickButton = () => {
    setIsDetailsVisible(prev => !prev)
  }

  return (
    <div
      ref={cardRef}
      className='group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-orange-400/30 hover:border-orange-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-orange-400/10'
    >
      <div className={`relative z-10 p-4 popupanimation ${isVisible ? 'play' : ''}`}>
        {/* Company Header */}
        <div className='flex items-center gap-3 mb-4 p-3 rounded-lg bg-gradient-to-r from-orange-400/10 to-transparent border-l-4 border-orange-400'>
          <div className='relative'>
            <img
              src={expInfo.CompanyIcon}
              className='w-10 h-10 object-cover rounded-lg border-2 border-orange-400/50 shadow-md p-2 bg-gray-800 group-hover:border-orange-400 transition-colors duration-300'
              alt='Company Logo'
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"></div>
          </div>
          
          <div className='flex-1'>
            <h3 className='text-orange-400 text-lg md:text-xl font-bold font-playpen group-hover:text-orange-300 transition-colors duration-300'>
              {expInfo.CompanyName}
            </h3>
            <p className='text-gray-400 text-xs font-sniglet mt-1'>
              {expInfo.Date}
            </p>
          </div>
        </div>

        {/* Designation */}
        <div className='mb-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-400'>
          <div className='flex items-center gap-2 mb-1'>
            <div className='w-1.5 h-1.5 bg-blue-400 rounded-full'></div>
            <span className='text-blue-400 text-xs font-semibold uppercase tracking-wider'>Role</span>
          </div>
          <p className='text-white text-sm md:text-base font-playpen font-semibold'>
            {expInfo.Designation}
          </p>
        </div>

        {/* Tech Stacks - Expandable */}
        <div className={`tech-details ${isDetailsVisible ? 'visible' : ''} transition-all duration-500`}>
          <div className='mb-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-400'>
            <div className='flex items-center gap-2 mb-3'>
              <div className='w-1.5 h-1.5 bg-purple-400 rounded-full'></div>
              <span className='text-purple-400 text-xs font-semibold uppercase tracking-wider'>Tech Stack</span>
            </div>
            
            <div className='grid grid-cols-1 gap-3'>
              {expInfo.tech_stacks.map((element, techIndex) => (
                <div key={techIndex} className='group/tech p-2 rounded-md bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300 border border-gray-700/50 hover:border-gray-600'>
                  <div className='flex items-center gap-2 mb-1'>
                    <div className='w-1 h-1 bg-orange-400 rounded-full'></div>
                    <span className='text-orange-400 font-semibold font-playpen text-xs uppercase tracking-wide'>
                      {element.name}
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-1'>
                    {element.stacks.split(', ').map((tech, i) => (
                      <span key={i} className='px-2 py-0.5 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600/50 hover:bg-orange-400/20 hover:text-orange-300 hover:border-orange-400/50 transition-all duration-300 cursor-default'>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <div className='flex justify-center mt-4'>
          <button 
            onClick={onClickButton}
            className='group/btn flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 border border-orange-400/30 hover:border-orange-400/60 hover:from-orange-400/30 hover:to-orange-600/30 transition-all duration-300 hover:scale-105'
          >
            <span className={`text-sm font-semibold transition-colors duration-300 ${
              isDetailsVisible 
                ? 'text-red-400 group-hover/btn:text-red-300' 
                : 'text-green-400 group-hover/btn:text-green-300'
            }`}>
              {isDetailsVisible ? 'Less' : 'More'}
            </span>
            <img
              src={isDetailsVisible ? pullup : dropdown}
              className={`h-3 w-3 transition-all duration-300 group-hover/btn:scale-110 ${
                isDetailsVisible ? 'rotate-180' : 'rotate-0'
              }`}
              alt="Toggle"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
