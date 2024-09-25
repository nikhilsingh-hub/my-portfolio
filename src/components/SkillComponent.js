import React from 'react';

function SkillComponent({ skillName, proficiency, icon }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (proficiency / 100) * circumference;

  return (
    <div className='flex flex-col justify-center items-center transition duration-500 hover:scale-125'>
      <div className='relative h-40 w-40 flex justify-center items-center rounded-full hover:border-2 hover:border-orange-500'>
        {/* Outer Circle with Progress Bar */}
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

        {/* Inner Circle with Skill Icon */}
        <div className='h-28 w-28 rounded-full flex justify-center items-center bg-black z-10'>
          <img src={icon} alt={skillName} className='h-20 w-20 rounded-full skill-icon' />
        </div>
      </div>
      <h2 className='text-white font-mono'>{skillName}</h2>
    </div>
  );
}

export default SkillComponent;
