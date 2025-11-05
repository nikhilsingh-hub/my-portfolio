import React from 'react';

const SectionHeader = ({ 
  title, 
  align = 'left',
  className = '',
  showLine = true,
  ...props 
}) => {
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };
  
  const classes = `flex items-center gap-4 sm:gap-6 ${alignmentClasses[align]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {showLine && align !== 'left' && (
        <div className='line flex-1 h-0.5 bg-gradient-to-r from-transparent to-orange-400'></div>
      )}
      
      <h2 className="tab-title text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
        {title}
      </h2>
      
      {showLine && align !== 'right' && (
        <div className='line flex-1 h-0.5 bg-gradient-to-r from-orange-400 to-transparent'></div>
      )}
    </div>
  );
};

export default SectionHeader;
