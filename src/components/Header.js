import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';

function Header({ siteLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
     <header className={`text-white flex items-center p-2 pl-8 pr-8 h-16 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D0D0D]' : 'bg-[#1A1A1A]'}`}>
      <h1 className='flex items-center text-2xl md:text-3xl font-playpen font-extrabold tracking-wide w-2/3 md:w-1/3 text-orange-400'>
        Nikhil Singh
      </h1>

      {/* Hamburger menu icon for small screens */}
      <div className="w-1/3 md:hidden flex justify-end items-center">
        <button
          onClick={toggleMenu}
          className="text-orange-400 focus:outline-none"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation for larger screens */}
      <nav className={`hidden md:flex w-1/3`}>
        <ul className='flex gap-8 justify-center h-full items-center font-sniglet font-medium tracking-widest text-white'>
          {tabs.map((ele, index) => (
            <Link
              key={index}
              spy={true}
              activeClass="active"
              to={ele.tabId}
              smooth={true}
              duration={500}
              offset={-180}
              className="cursor-pointer hover:text-orange-400 transition-colors duration-300 ease-in-out"
            >
              {ele.tabName}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Social sites icons for large screens */}
      <div className='hidden md:flex w-1/3 justify-end items-center'>
        <div className="flex items-center justify-between gap-6 bg-orange-400 bg-opacity-90 p-3 rounded-full h-12 shadow-2xl transition-all duration-300 ease-in-out">
          {siteLinks.map(element => (
            <a key={element.link} href={element.link} target="_blank" rel='noreferrer'>
              <img src={element.icon} alt={element.alt} className='h-6 w-6 transition-transform duration-500 hover:scale-150 hover:rotate-12' />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-[#1A1A1A] z-40">
          <ul className="flex flex-col items-center gap-6 py-4 font-sniglet font-medium tracking-widest text-white">
            {tabs.map((ele, index) => (
              <Link
                key={index}
                spy={true}
                activeClass="active"
                to={ele.tabId}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setMenuOpen(false)} // Close menu after click
                className="cursor-pointer hover:text-orange-400 transition-colors duration-300 ease-in-out"
              >
                {ele.tabName}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
