import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  const baseStyle = "px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150";
  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;