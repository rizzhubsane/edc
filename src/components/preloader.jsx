import React from 'react';
import preloaderGif from '../assets/preloader.gif';

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img 
          src={preloaderGif} 
          alt="Loading..." 
          className="w-[48rem] h-[48rem] md:w-[60rem] md:h-[60rem] lg:w-[72rem] lg:h-[72rem] object-contain"
        />
      </div>
    </div>
  );
};

export default Preloader;
