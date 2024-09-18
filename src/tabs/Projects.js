import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard.js'

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: 'Travel Agency App', tools: ['xrx', 'yui', 'iocv'], description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab sequi aliquam totam, dolor numquam autem culpa, quod quisquam reiciendis quae quidem maiores ducimus minima officia aspernatur, maxime adipisci pariatur.
      Ea, tempore dolor! Eligendi ab sunt saepe unde pariatur excepturi placeat quaerat quas ea. Aspernatur, incidunt animi illo quo consectetur in. Blanditiis nemo nihil a libero, vel reprehenderit alias modi?
      Corporis, adipisci! Quaerat praesentium exercitationem ut natus, aliquam assumenda illo alias! Magni, eaque, nesciunt repellendus illum et facere iste dicta amet perspiciatis expedita tempore ducimus reiciendis. Voluptatum, voluptatibus earum. Ullam.` },
    {
      name: 'E-commerce Platform', tools: ['xrx', 'yui', 'iocv'], description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab sequi aliquam totam, dolor numquam autem culpa, quod quisquam reiciendis quae quidem maiores ducimus minima officia aspernatur, maxime adipisci pariatur.
      Ea, tempore dolor! Eligendi ab sunt saepe unde pariatur excepturi placeat quaerat quas ea. Aspernatur, incidunt animi illo quo consectetur in. Blanditiis nemo nihil a libero, vel reprehenderit alias modi?
      Corporis, adipisci! Quaerat praesentium exercitationem ut natus, aliquam assumenda illo alias! Magni, eaque, nesciunt repellendus illum et facere iste dicta amet perspiciatis expedita tempore ducimus reiciendis. Voluptatum, voluptatibus earum. Ullam.` },
    {
      name: 'Social Media App', tools: ['xrx', 'yui', 'iocv'], description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab sequi aliquam totam, dolor numquam autem culpa, quod quisquam reiciendis quae quidem maiores ducimus minima officia aspernatur, maxime adipisci pariatur.
      Ea, tempore dolor! Eligendi ab sunt saepe unde pariatur excepturi placeat quaerat quas ea. Aspernatur, incidunt animi illo quo consectetur in. Blanditiis nemo nihil a libero, vel reprehenderit alias modi?
      Corporis, adipisci! Quaerat praesentium exercitationem ut natus, aliquam assumenda illo alias! Magni, eaque, nesciunt repellendus illum et facere iste dicta amet perspiciatis expedita tempore ducimus reiciendis. Voluptatum, voluptatibus earum. Ullam.` },
  ];


  return (
    <div className='flex flex-col gap-16'>
      <div className='sticky top-20 flex p-2'>
        <h1 className='tab-title'>
          Projects
        </h1>
      </div>
      <div className='flex flex-col items-center gap-4'>
        {
          projects.map((element, index) =>
            <ProjectCard project={element} index={index} />
          )
        }
      </div>

    </div>

  );
};

export default Projects
