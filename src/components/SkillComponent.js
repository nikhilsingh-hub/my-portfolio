import React from 'react';

function SkillComponent({ skillName, proficiency, icon }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (proficiency / 100) * circumference;

  return (
    <div className='flex flex-col justify-center items-center transition duration-500 hover:scale-125 hover:text-orange-400'>
      <div className='relative h-32 w-32 md:h-40 md:w-40 flex justify-center items-center rounded-full hover:border-2 hover:border-orange-500'>
        <svg className='absolute' height="160" width="160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="white"
            strokeWidth="10"
            fill="transparent"
            className="progress-bar-bg"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="orange"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="progress-bar"
            style={{
              transition: 'stroke-dashoffset 0.5s ease',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          />
        </svg>

        <div className='h-24 w-24 md:h-28 md:w-28 rounded-full flex justify-center items-center bg-black z-10'>
          <img src={icon} alt={skillName} className='h-16 w-16 md:h-20 md:w-20 rounded-full skill-icon' />
        </div>
      </div>
      <h2 className='text-white font-sniglet text-sm md:text-base mt-2'>{skillName}</h2>
    </div>

  );
}

export default SkillComponent;
