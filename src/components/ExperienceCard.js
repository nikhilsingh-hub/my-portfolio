import React, { useRef, useState, useEffect } from 'react';
import IsVisible from '../hooks/isVisible';
import dropdown from '../assets/svg/dropdown.svg'
import pullup from '../assets/svg/pullup.svg'

function ExperienceCard({ expInfo, index }) {
  const cardRef = useRef(null);
  const isVisible = IsVisible(cardRef);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [isModalOpen]);

  return (
    <div
      ref={cardRef}
      className='group relative overflow-hidden rounded-xl bg-gradient-to-br from-black via-gray-900 to-black border border-orange-400/30 hover:border-orange-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-orange-400/20 w-full max-w-none'
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className={`relative z-10 p-4 md:p-6 popupanimation ${isVisible ? 'play' : ''}`}>
        {/* Company Header */}
        <div className='flex items-center gap-4 mb-6 p-4 rounded-xl bg-gradient-to-r from-orange-400/10 to-transparent border-l-4 border-orange-400'>
          <div className='relative'>
            <img
              src={expInfo.CompanyIcon}
              className='w-12 h-12 object-cover rounded-xl border-2 border-orange-400/50 shadow-md p-2 bg-black group-hover:border-orange-400 transition-colors duration-300'
              alt='Company Logo'
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-black"></div>
          </div>
          
          <div className='flex-1'>
            <h3 className='text-orange-400 text-lg md:text-xl font-bold font-playpen group-hover:text-orange-300 transition-colors duration-300'>
              {expInfo.CompanyName}
            </h3>
            <p className='text-gray-400 text-sm font-sniglet mt-1'>
              {expInfo.Date}
            </p>
          </div>
        </div>

        {/* Designation */}
        <div className='mb-6 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border-l-4 border-white/50'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-2 h-2 bg-white rounded-full'></div>
            <span className='text-white/70 text-xs font-semibold uppercase tracking-wider'>Role</span>
          </div>
          <p className='text-white text-base md:text-lg font-playpen font-semibold'>
            {expInfo.Designation}
          </p>
        </div>

        {/* View Details Button */}
        <div className='flex justify-center'>
          <button 
            onClick={openModal}
            className='group/btn flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 border border-orange-400/30 hover:border-orange-400/60 hover:from-orange-400/30 hover:to-orange-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/25'
          >
            <span className='text-sm md:text-base font-semibold transition-colors duration-300 text-white group-hover/btn:text-orange-300'>
              View Details
            </span>
            <img
              src={dropdown}
              className='h-4 w-4 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:brightness-125'
              alt="View Details"
            />
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            // Only close if clicking on the overlay itself, not its children
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl border border-orange-400/50 shadow-2xl animate-modalSlideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-orange-400/20 hover:bg-orange-400/30 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 group"
            >
              <span className="text-orange-400 group-hover:text-white text-xl font-bold">×</span>
            </button>

            {/* Modal Header */}
            <div className="p-6 border-b border-orange-400/30">
              <div className='flex items-center gap-6'>
                <div className='relative'>
                  <img
                    src={expInfo.CompanyIcon}
                    className='w-16 h-16 object-cover rounded-2xl border-2 border-orange-400/50 shadow-lg p-3 bg-black'
                    alt='Company Logo'
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-black"></div>
                </div>
                
                <div className='flex-1'>
                  <h2 className='text-orange-400 text-2xl md:text-3xl font-bold font-playpen mb-2'>
                    {expInfo.CompanyName}
                  </h2>
                  <p className='text-white text-lg md:text-xl font-semibold font-playpen mb-1'>
                    {expInfo.Designation}
                  </p>
                  <p className='text-gray-400 text-sm font-sniglet'>
                    {expInfo.Date}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body - Tech Stacks */}
            <div className="p-6">
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-3 h-3 bg-orange-400 rounded-full'></div>
                <h3 className='text-orange-400 text-lg md:text-xl font-semibold uppercase tracking-wider'>
                  Technology Stack
                </h3>
              </div>

              <div className='grid grid-cols-1 gap-6'>
                {expInfo.tech_stacks.map((element, techIndex) => (
                  <div key={techIndex} className='p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/10 hover:from-orange-400/10 hover:to-orange-600/10 transition-all duration-300 border border-white/10 hover:border-orange-400/30'>
                    <div className='flex items-center gap-3 mb-4'>
                      <div className='w-2 h-2 bg-orange-400 rounded-full'></div>
                      <span className='text-orange-400 font-semibold font-playpen text-sm md:text-base uppercase tracking-wide'>
                        {element.name}
                      </span>
                    </div>
                    <div className='flex flex-wrap gap-3'>
                      {element.stacks.split(', ').map((tech, i) => (
                        <span key={i} className='px-4 py-2 text-sm bg-gradient-to-r from-black/50 to-gray-900/50 text-white rounded-lg border border-white/20 hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-orange-600/20 hover:text-orange-300 hover:border-orange-400/50 transition-all duration-300 cursor-default'>
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="flex justify-center mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={closeModal}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 border border-orange-400/30 hover:border-orange-400/60 hover:from-orange-400/30 hover:to-orange-600/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-sm md:text-base font-semibold text-white hover:text-orange-300 transition-colors duration-300">
                    Close
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
