import React from 'react';
import Image from 'next/image'; // Adjust based on your image loading method
import { COLORS } from '@/constants';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div className="relative flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg">
      {/* Spinner */}
      <div
        className="absolute w-24 h-24 border-8 border-solid rounded-full animate-spin"
        style={{
          borderColor: `${COLORS.primary} ${COLORS.secondary} ${COLORS.secondary} ${COLORS.primary}`,
          borderTopColor: COLORS.primary,
          borderRightColor: COLORS.secondary,
          borderBottomColor: COLORS.secondary,
          borderLeftColor: COLORS.primary,
        }}
      ></div>
      
      {/* Logo */}
      <div className="relative z-10">
        <Image src='/logo/logo.svg' alt="Logo" width={80} height={80} className='rounded-full' />
      </div>
    </div>
  </div>
  );
};

export default Loading;
