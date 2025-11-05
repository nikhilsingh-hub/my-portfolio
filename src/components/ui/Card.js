import React, { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  variant = 'default',
  className = '',
  hover = true,
  ...props 
}, ref) => {
  const baseClasses = 'relative overflow-hidden rounded-xl border transition-all duration-500';
  
  const variants = {
    default: 'bg-gradient-to-br from-slate-900 via-gray-900 to-black border-orange-400/20 hover:border-orange-400/50 shadow-xl hover:shadow-2xl hover:shadow-orange-400/10',
    experience: 'bg-gradient-to-br from-slate-900 via-gray-900 to-black border-orange-400/30 hover:border-orange-400/60 shadow-lg hover:shadow-orange-400/10',
    project: 'bg-gradient-to-br from-slate-900 via-gray-900 to-black border-orange-400/20 hover:border-orange-400/50 shadow-xl hover:shadow-2xl hover:shadow-orange-400/10'
  };
  
  const hoverClasses = hover ? 'hover:scale-[1.02]' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div ref={ref} className={classes} {...props}>
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
