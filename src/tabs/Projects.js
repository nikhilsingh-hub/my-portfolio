import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard.js'
import projects from '../data/projectData.js'

function Projects() {

  return ( 
    <section id='projects' className='flex flex-col gap-20 p-4 pt-6 pb-6 sm:p-10 bg-[#242424] rounded-lg mx-4 my-16'>
    <div className='sticky top-16 items-center gap-4 flex sm:p-2'>  
      <h1 className='tab-title'>
        Projects
      </h1>
      <div className='line'></div>
    </div>
    <div className='flex flex-col items-center gap-4 mb-4'>
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
