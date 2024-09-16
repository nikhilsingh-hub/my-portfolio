import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/Card.js'

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { name: 'Travel Agency App', description: 'Project 1 description.' },
    { name: 'E-commerce Platform', description: 'Project 2 description.' },
    { name: 'Social Media App', description: 'Project 3 description.' },
  ];

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const activeCard = Math.floor(scrollY / windowHeight);
    setActiveIndex(activeCard);
  };



  return (
    <div className='border-2 border-green-500'>
    <Card/>

 
</div>

  );
};

export default Projects
