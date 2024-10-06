import React, {useState, useEffect} from 'react';

function SkillComponent({ skillName, proficiency, icon }) {
  const [radius, setRadius] = useState(70); // Default for larger screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(40); // Smaller radius on mobile
      } else {
        setRadius(70); // Larger radius on medium+ screens
      }
    };

    // Initial check
    handleResize();

    // Add event listener for screen resizing
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (proficiency / 100) * circumference;

  return (
    <div className='flex flex-col justify-center items-center transition duration-500 hover:scale-110 hover:text-orange-400'>
      <div className='relative h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-40 flex justify-center items-center rounded-full hover:border-2 hover:border-orange-500'>
        {/* Outer Circle with Progress Bar */}
        <svg className='absolute' height="160" width="160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            className="progress-bar-bg"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="orange"
            strokeWidth="2"
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
        <div className='h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded-full flex justify-center items-center bg-black z-10'>
          <img src={icon} alt={skillName} className='h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full skill-icon' />
        </div>
      </div>

      {/* Skill Name */}
      <h2 className='text-white font-sniglet text-xs sm:text-sm md:text-base mt-2'>{skillName}</h2>
    </div>
  );
}

export default SkillComponent;
