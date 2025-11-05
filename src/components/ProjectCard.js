import React, { useRef } from 'react';
import github from '../assets/svg/github.svg';
import isElementVisible from '../hooks/isVisible.js';

function ProjectCard({ project, index }) {
  const { name, tools, description, githublink, image } = project;
  const cardRef = useRef(null);
  const isOnScreen = isElementVisible(cardRef);
  const heightToStick = [7, 11, 15];

  return (
    <div 
      ref={cardRef} 
      className={`group relative w-full md:w-[45%] bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-xl overflow-hidden border border-orange-400/20 hover:border-orange-400/50 shadow-xl hover:shadow-2xl hover:shadow-orange-400/10 transition-all duration-500 hover:scale-[1.02] sticky`}
      style={{ top: `${heightToStick[index]}rem` }}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
      {/* Header */}
      <div className='flex items-center justify-between p-4 border-b border-orange-400/30 bg-gradient-to-r from-orange-400/10 to-transparent'>
            <h2 className='flex-grow text-center font-bold text-fluid-xl font-playpen text-orange-400 group-hover:text-orange-300 transition-colors duration-300'>
              {name}
            </h2>
        <a 
          href={githublink} 
          target='_blank' 
          rel='noopener noreferrer'
          className='ml-3 p-2 rounded-full bg-gray-800/50 hover:bg-orange-400/20 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-110'
        >
          <img src={github} className='h-4 w-4 sm:h-5 sm:w-5 filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300' alt="GitHub" />
        </a>
      </div>

      {/* Project Image */}
      <div className='relative space-fluid-md flex justify-center items-center bg-gradient-to-b from-transparent to-black/20'>
        <div className='relative group/img'>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 blur-sm"></div>
          <img 
            src={image} 
            alt={`${name} preview`} 
            className='relative z-10 rounded-lg w-full max-w-[280px] sm:max-w-[320px] h-auto object-cover shadow-lg group-hover/img:scale-105 transition-transform duration-300' 
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 space-fluid-md space-y-4'>
        {/* Technologies */}
        <div>
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-1.5 h-1.5 bg-orange-400 rounded-full'></div>
            <h3 className='text-fluid-sm text-orange-400 font-semibold uppercase tracking-wider'>Tech Stack</h3>
          </div>
          <div className='flex flex-wrap gap-2'>
            {tools.map((tool, toolIndex) => (
              <span 
                key={toolIndex} 
                className='px-3 py-1 text-fluid-xs bg-gradient-to-r from-orange-400/20 to-orange-600/20 text-orange-300 rounded-full border border-orange-400/30 hover:border-orange-400/60 hover:from-orange-400/30 hover:to-orange-600/30 transition-all duration-300 cursor-default'
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-1.5 h-1.5 bg-blue-400 rounded-full'></div>
            <h3 className='text-fluid-sm text-blue-400 font-semibold uppercase tracking-wider'>Overview</h3>
          </div>
          <p className='text-gray-300 text-fluid-base leading-relaxed font-sniglet'>
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="pt-3 flex justify-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProjectCard;


