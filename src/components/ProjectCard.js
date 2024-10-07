import React, { useRef } from 'react';
import github from '../assets/svg/github.svg';
import isElementVisible from '../hooks/isVisible.js';

function ProjectCard({ project, index }) {
  const { name, tools, description, githublink, image } = project;
  const cardRef = useRef(null);
  const isOnScreen = isElementVisible(cardRef);
  const heightToStick = [7, 11, 15]

  return (
    <div ref={cardRef} className={`w-full md:w-[45%] border-2 border-black rounded-lg sticky overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-black text-white`} style={{ top: `${heightToStick[index]}rem` }}>
  <div className='flex items-center justify-between border-b-2 border-orange-400 p-4 text-orange-400'>
    <a href={githublink} target='_blank' rel='noopener noreferrer'>
      <img src={github} className='h-5 w-5 hover:scale-125 hover:rotate-45 transition-all duration-300 ease-in-out' alt="GitHub Link" />
    </a>
    <h2 className='flex-grow text-center font-bold text-xl font-playpen'>{name}</h2>
  </div>

  <div className='p-5 flex justify-center items-center'>
    <img src={image} alt="image" className='rounded-lg w-[100%] sm:w-[80%] h-auto sm:max-w-[25vw] sm:max-h-[25vh]' />
  </div>

  <div className={`p-4`}>
    <div className="mb-3">
      <h3 className={`text-lg text-[#F0A500] font-semibold animate-text-from-left font-akaya ${isOnScreen ? 'visible' : ''}`}>Technologies Used:</h3>
      <ul className={`flex flex-wrap gap-2 mt-2 animate-text-from-right font-sniglet ${isOnScreen ? 'visible' : ''}`}>
        {tools.map((tool, index) => (
          <li key={index} className='bg-orange-400 text-white rounded-full px-2 py-1 text-sm'>
            {tool}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className={`text-lg text-[#F0A500] font-semibold animate-text-from-left font-akaya ${isOnScreen ? 'visible' : ''}`}>Description:</h3>
      <p className={`mb-4 animate-text-from-right font-sniglet text-sm sm:text-base ${isOnScreen ? 'visible' : ''}`}>
        {description}
      </p>
    </div>
  </div>
</div>

  );
}

export default ProjectCard;


