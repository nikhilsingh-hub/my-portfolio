import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Header({ siteLinks }) {
  const [activeTab, setActiveTab] = useState('About');
  const [scrolled, setScrolled] = useState(false);

  const tabs = [
    {
      tabName: 'About',
      tabId: 'about'
    },
    {
      tabName: 'Skills',
      tabId: 'skills'
    },
    {
      tabName: 'Experience',
      tabId: 'experience'
    },
    {
      tabName: 'Projects',
      tabId: 'projects'
    },
    {
      tabName: 'ContactMe',
      tabId: 'contactme'
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`text-white flex items-center p-2 pl-8 pr-8 h-16 sticky top-0 z-50 ${scrolled ? 'bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-2xl' : 'bg-transparent'}`}>
      <h1 className='flex items-center text-3xl font-playpen font-extrabold tracking-wide w-1/3 text-[rgb(135,59,191)]'>
        Nikhil Singh
      </h1>
      <nav className='w-1/3'>
        <ul className='flex gap-8 justify-center h-full items-center font-bold tracking-widest text-white'>
          {
            tabs.map((ele, index) => {
              return (
                <Link
                  key={index}
                  spy={true}
                  activeClass="active"
                  to={ele.tabId} smooth={true} duration={500}
                  className={`${activeTab === ele.tabName ? 'text-[rgb(135,59,191)] underline' : ''} cursor-pointer hover:text-purple-300 transition-colors duration-300 ease-in-out`}
                  onClick={() => setActiveTab(ele.tabName)}
                >
                  {ele.tabName}
                </Link>
              )
            })
          }
        </ul>
      </nav>
      <div className='w-1/3 flex justify-end items-center'>
        <div className="flex items-center justify-between gap-6 bg-[rgb(135,59,191)] bg-opacity-90 p-3 rounded-full h-12 shadow-2xl transition-all duration-300 ease-in-out">
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
