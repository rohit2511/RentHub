import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} RentAnything. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
