import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  target, 
  rel,
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full';
  
  const variants = {
    primary: 'bg-gradient-to-r from-orange-400/20 to-orange-600/20 border border-orange-400/30 hover:border-orange-400/60 hover:from-orange-400/30 hover:to-orange-600/30 text-orange-400 hover:text-orange-300',
    secondary: 'bg-gray-800/50 hover:bg-orange-400/20 border border-gray-700/50 hover:border-orange-400/50 text-gray-300 hover:text-orange-300',
    ghost: 'hover:bg-orange-400/10 text-orange-400 hover:text-orange-300'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
