import React, { useRef } from 'react';
import github from '../assets/github.svg';
import isElementVisible from '../hooks/isVisible.js';

function ProjectCard({ project, index }) {
  const { name, tools, description, githubLink } = project;
  const cardRef = useRef(null);
  const isOnScreen = isElementVisible(cardRef);
  const heightToStick = [7, 11, 15]

  return (
    <div ref={cardRef} className={`w-[45%] border-2 border-black rounded-lg sticky overflow-hidden shadow-lg bg-[#161335]  text-white`} style={{ top: `${heightToStick[index]}rem` }}>
      <div className='flex items-center justify-between border-b-2 border-[#873BBF] p-4 text-[#873BBF]'>
        <a href={githubLink} target='_blank' rel='noopener noreferrer'>
          <img src={github} className='h-5 w-5' alt="GitHub Link" />
        </a>
        <h2 className='flex-grow text-center font-bold text-xl'>{name}</h2>
      </div>

      {/* Animated Section */}
      <div className={`p-4`}>
        {/* Tools Used */}
        <div className="mb-3">
          <h3 className={`text-lg text-[#3B82F6] font-semibold animate-text-from-left ${isOnScreen ? 'visible' : ''}`}>Technologies Used:</h3>
          <ul className={`flex flex-wrap gap-2 mt-2 animate-text-from-right ${isOnScreen ? 'visible' : ''}`}>
            {tools.map((tool, index) => (
              <li key={index} className='bg-[#873BBF] text-white rounded-full px-2 py-1 text-sm'>
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Description */}
        <div>
          <h3 className={`text-lg text-[#3B82F6] font-semibold animate-text-from-left ${isOnScreen ? 'visible' : ''}`}>Description:</h3>
          <p className={` mb-4 animate-text-from-right ${isOnScreen ? 'visible' : ''}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;


