import React, { useState, useEffect } from 'react';

function Header({ siteLinks }) {
  const [activeTab, setActiveTab] = useState('Skills');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // You can adjust this value
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
    <header className={`text-white flex p-2 pl-8 pr-8 h-16 sticky top-0 z-50 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <h1 className='flex items-center text-3xl font-mono tracking-wide w-1/3'>Nikhil Singh</h1>
      <nav className='w-1/3'>
        <ul className='flex gap-8 justify-center h-full items-center font-bold font-mono tracking-wide'>
          <li
            className={`${activeTab === 'About' ? 'text-white underline' : ''} cursor-pointer`}
            onClick={() => setActiveTab('About')}
          >
            About
          </li>
          <li
            className={`${activeTab === 'Skills' ? 'text-white underline' : ''} cursor-pointer`}
            onClick={() => setActiveTab('Skills')}
          >
            Skills
          </li>
          <li
            className={`${activeTab === 'Experience' ? 'text-white underline' : ''} cursor-pointer`}
            onClick={() => setActiveTab('Experience')}
          >
            Experience
          </li>
          <li
            className={`${activeTab === 'Projects' ? 'text-white underline' : ''} cursor-pointer`}
            onClick={() => setActiveTab('Projects')}
          >
            Projects
          </li>
        </ul>
      </nav>
      <div className='w-1/3 flex justify-end items-center'>
      <div className="flex items-center justify-between gap-6 bg-gray-800 bg-opacity-70 p-2 rounded-full h-10">
        {siteLinks.map(element => (
          <a key={element.link} href={element.link} className='' target="_blank" rel='noreferrer'>
            <img src={element.icon} alt={element.alt} className='h-6 w-6 transition duration-500 hover:scale-125' />
          </a>
        ))}
      </div>
      </div>

    </header>
  );
}

export default Header;
