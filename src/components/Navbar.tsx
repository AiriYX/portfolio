
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="section-container flex justify-between items-center pt-8 pb-2">
      <div className="flex items-center">
        <Link to="/" className="flex">
          <svg width="34" height="12" viewBox="0 0 34 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-wave">
            <path d="M1 9C3.5 5 5.5 3 8 5C10.5 7 11.5 5 14 3C16.5 1 19 1 20.5 3C22 5 23.5 7 25.5 5C27.5 3 30 1 33 3" stroke="#0A2342" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>
      </div>
      <div className="flex space-x-8 text-sm font-medium">
        <Link to="/projects" className="text-[#0A2342] hover:text-[#002500] transition-colors">Projects</Link>
        <div className="px-2 text-[#0A2342]/30">|</div>
        <Link to="/about" className="text-[#0A2342] hover:text-[#002500] transition-colors">About me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
