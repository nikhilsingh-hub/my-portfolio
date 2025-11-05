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
      className='group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-orange-400/30 hover:border-orange-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-orange-400/10'
    >
      <div className={`relative z-10 p-4 popupanimation ${isVisible ? 'play' : ''}`}>
        {/* Company Header */}
        <div className='flex items-center gap-3 mb-4 p-3 rounded-lg bg-gradient-to-r from-orange-400/10 to-transparent border-l-4 border-orange-400'>
          <div className='relative'>
            <img
              src={expInfo.CompanyIcon}
              className='w-10 h-10 object-cover rounded-lg border-2 border-orange-400/50 shadow-md p-2 bg-gray-800 group-hover:border-orange-400 transition-colors duration-300'
              alt='Company Logo'
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"></div>
          </div>
          
          <div className='flex-1'>
            <h3 className='text-orange-400 text-lg md:text-xl font-bold font-playpen group-hover:text-orange-300 transition-colors duration-300'>
              {expInfo.CompanyName}
            </h3>
            <p className='text-gray-400 text-xs font-sniglet mt-1'>
              {expInfo.Date}
            </p>
          </div>
        </div>

        {/* Designation */}
        <div className='mb-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-400'>
          <div className='flex items-center gap-2 mb-1'>
            <div className='w-1.5 h-1.5 bg-blue-400 rounded-full'></div>
            <span className='text-blue-400 text-xs font-semibold uppercase tracking-wider'>Role</span>
          </div>
          <p className='text-white text-sm md:text-base font-playpen font-semibold'>
            {expInfo.Designation}
          </p>
        </div>

        {/* View Details Button */}
        <div className='flex justify-center mt-4'>
          <button 
            onClick={openModal}
            className='group/btn flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 border border-orange-400/30 hover:border-orange-400/60 hover:from-orange-400/30 hover:to-orange-600/30 transition-all duration-300 hover:scale-105'
          >
            <span className='text-sm font-semibold transition-colors duration-300 text-green-400 group-hover/btn:text-green-300'>
              View Details
            </span>
            <img
              src={dropdown}
              className='h-3 w-3 transition-all duration-300 group-hover/btn:scale-110 rotate-0'
              alt="View Details"
            />
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-xl border border-orange-400/50 shadow-2xl animate-modalSlideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 hover:border-red-400/60 transition-all duration-300 group"
            >
              <span className="text-red-400 group-hover:text-red-300 text-lg font-bold">×</span>
            </button>

            {/* Modal Header */}
            <div className="p-6 border-b border-orange-400/30">
              <div className='flex items-center gap-4'>
                <div className='relative'>
                  <img
                    src={expInfo.CompanyIcon}
                    className='w-16 h-16 object-cover rounded-xl border-2 border-orange-400/50 shadow-lg p-3 bg-gray-800'
                    alt='Company Logo'
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
                </div>
                
                <div className='flex-1'>
                  <h2 className='text-orange-400 text-2xl font-bold font-playpen mb-1'>
                    {expInfo.CompanyName}
                  </h2>
                  <p className='text-blue-400 text-lg font-semibold font-playpen mb-1'>
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
              <div className='flex items-center gap-2 mb-6'>
                <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                <h3 className='text-purple-400 text-lg font-semibold uppercase tracking-wider'>
                  Technology Stack
                </h3>
              </div>

              <div className='grid grid-cols-1 gap-4'>
                {expInfo.tech_stacks.map((element, techIndex) => (
                  <div key={techIndex} className='p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600'>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='w-1.5 h-1.5 bg-orange-400 rounded-full'></div>
                      <span className='text-orange-400 font-semibold font-playpen text-sm uppercase tracking-wide'>
                        {element.name}
                      </span>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {element.stacks.split(', ').map((tech, i) => (
                        <span key={i} className='px-3 py-1.5 text-sm bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 rounded-lg border border-gray-600/50 hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-orange-600/20 hover:text-orange-300 hover:border-orange-400/50 transition-all duration-300 cursor-default'>
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="flex justify-center mt-6 pt-4 border-t border-gray-700/50">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-gray-600/20 to-gray-700/20 border border-gray-500/30 hover:border-gray-400/60 hover:from-gray-600/30 hover:to-gray-700/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300">
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
