import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105";
  const disabledStyle = "bg-gray-400 cursor-not-allowed";
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyle} ${disabled ? disabledStyle : ''} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;