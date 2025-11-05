import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'orange',
  className = '',
  fullScreen = false 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colors = {
    orange: 'border-orange-400 border-t-transparent',
    blue: 'border-blue-400 border-t-transparent',
    gray: 'border-gray-400 border-t-transparent'
  };

  const spinnerClasses = `${sizes[size]} ${colors[color]} border-2 rounded-full animate-spin ${className}`;

  const spinner = (
    <div className={spinnerClasses}></div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center">
          {spinner}
          <p className="mt-4 text-gray-400">Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
