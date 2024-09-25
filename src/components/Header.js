import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { throttle } from 'lodash';

function Header({ siteLinks }) {
  const [scrolled, setScrolled] = useState(false);

  const tabs = [
    { tabName: 'About', tabId: 'about' },
    { tabName: 'Skills', tabId: 'skills' },
    { tabName: 'Experience', tabId: 'experience' },
    { tabName: 'Projects', tabId: 'projects' },
    { tabName: 'ContactMe', tabId: 'contactme' },
  ];

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      console.log("Scroll event begins");
    });

    Events.scrollEvent.register('end', () => {
      console.log("Scroll event ends");
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`text-white flex items-center p-2 pl-8 pr-8 h-16 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D0D0D]' : 'bg-[#1A1A1A]'}`}>
      <h1 className='flex items-center text-3xl font-playpen font-extrabold tracking-wide w-1/3 text-orange-400'>
        Nikhil Singh
      </h1>
      <nav className='w-1/3'>
        <ul className='flex gap-8 justify-center h-full items-center font-bold tracking-widest text-white'>
          {tabs.map((ele, index) => (
            <Link
              key={index}
              spy={true}
              activeClass="active"
              to={ele.tabId}
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer hover:text-orange-400 transition-colors duration-300 ease-in-out"
            >
              {ele.tabName}
            </Link>
          ))}
        </ul>
      </nav>
      <div className='w-1/3 flex justify-end items-center'>
        <div className="flex items-center justify-between gap-6 bg-orange-400 bg-opacity-90 p-3 rounded-full h-12 shadow-2xl transition-all duration-300 ease-in-out">
          {siteLinks.map(element => (
            <a key={element.link} href={element.link} target="_blank" rel='noreferrer'>
              <img src={element.icon} alt={element.alt} className='h-6 w-6 transition-transform duration-500 hover:scale-150 hover:rotate-12' />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
