import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard.js'
import chatImg from '../assets/Chat.png'

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: 'Chat App', image: chatImg , githublink: 'https://github.com/nikhilsingh-hub/chatApp', tools: ['React', 'MongoDb', 'Nodejs', 'Socket.io'], description: `Developed a resilient web chat application using the MERN stack and Socket.io for real-time communication.`
    },
    {
      name: 'Food Delivery App', image: chatImg, githublink: 'https://github.com/nikhilsingh-hub/Food-Delivery-App', tools: ['MERN', 'Payment Gateway'], description: `Created a food delivery app with user authentication, state management using Redux Toolkit, and an integrated payment gateway` },
    {
      name: 'Employee Track App', image: chatImg, githublink: 'https://github.com/nikhilsingh-hub/Spring_boot_MVN_Project', tools: ['Spring Boot', 'Java', 'ThymeLeaf', 'Docker'], description: ` Built a Spring Boot MVC web app with Thyme leaf for employee record management, and containerized it using Docker for deployment` },
  ];


  return (
    <div className='flex flex-col gap-20'>
      <div className='sticky top-16 flex p-2'>
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
