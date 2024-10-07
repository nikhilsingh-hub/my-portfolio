import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard.js'
import projects from '../data/projectData.js'

function Projects() {

  return ( 
    <section id='projects' className='flex flex-col gap-8 md:gap-12 bg-[#1A1A1A] rounded-lg p-2 pt-6 pb-6 md:p-10 mx-4 md:mx-14 my-10 md:my-32'>
    <div className='sticky top-16 gap-4 flex items-center sm:p-2'>  
      <h1 className='tab-title'>
        Projects
      </h1>
      <div className='line'></div>
    </div>
    <div className='flex flex-col items-center gap-4 mb-4 p-1 sm:p-0'>
      {
        projects.map((element, index) =>
          <ProjectCard key={index} project={element} index={index} />
        )
      }
    </div>
  </section>
  );
};

export default Projects
