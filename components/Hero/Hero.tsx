import React from 'react';
import { COLORS, TEXTS } from '@/constants'; // Ensure this path is correct
import Navbar_Hero from '../Navbar/Navbar';

const Hero_default = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black py-4 h-screen">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-3">
        <Navbar_Hero />

        {/* Announcement Banner */}
        <div className="mb-4 mt-6 flex items-center space-x-2">
         
          <p className="mt-2 text-sm md:text-base text-gray-300 flex items-center justify-center">
          <span
            className="py-1 px-3 rounded-full text-white font-semibold uppercase text-xs flex items-center justify-center"
            style={{ backgroundColor: COLORS.secondary }}
          >
            New
          </span> <span className='ml-3'></span>{TEXTS.bannerAnnouncement}
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="relative font-extrabold text-5xl md:text-7xl leading-tight tracking-tight text-white">
          <span style={{ color: COLORS.primary }}>{TEXTS.institutionName}</span>{' '}
          <span
            className="absolute left-0 bottom-0 w-52 h-[1px] hidden lg:block"
            style={{ backgroundColor: COLORS.primary }}
          ></span>
          <span> {TEXTS.institutionType}</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto">
          {TEXTS.subHeading}
        </p>

        {/* Call to Action Button */}
        <button
          className="py-3 px-8 rounded-full shadow-lg font-semibold text-white"
          style={{ backgroundColor: COLORS.primary }}
        >
          {TEXTS.primaryButtonText}
        </button>
      </div>
    </div>
  );
};

export default Hero_default;
