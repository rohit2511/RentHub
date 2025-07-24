import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, name, className = '' }) => {
  const baseStyle = "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyle} ${className}`}
      required
    />
  );
};

export default Input;