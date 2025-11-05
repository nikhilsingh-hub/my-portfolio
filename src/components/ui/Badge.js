import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full border transition-all duration-300 cursor-default';
  
  const variants = {
    default: 'bg-gradient-to-r from-orange-400/20 to-orange-600/20 text-orange-300 border-orange-400/30 hover:border-orange-400/60 hover:from-orange-400/30 hover:to-orange-600/30',
    tech: 'bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-orange-400/20 hover:text-orange-300 hover:border-orange-400/50',
    skill: 'bg-orange-400 text-white border-orange-400',
    category: 'bg-gradient-to-r from-blue-400/20 to-blue-600/20 text-blue-300 border-blue-400/30'
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
