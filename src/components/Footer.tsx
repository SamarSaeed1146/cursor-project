import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
        <div className="flex flex-col items-center mt-4">
          <Image src="/path/to/logo.png" alt="Company Logo" width={50} height={50} className="h-12 mb-2" />
          <p className="text-sm">Email: <a href="mailto:someone@example.com" className="hover:text-gray-400">someone@example.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 