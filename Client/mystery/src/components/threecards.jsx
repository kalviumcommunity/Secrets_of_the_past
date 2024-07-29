import React from 'react';
import imgStars from '../assets/imgStars.png';

function ThreeStars() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="p-4 m-3">
        <img src={imgStars} alt="Star Icon" className="w-9 h-9" />
      </div>
      <div className="p-4 m-3">
        <img src={imgStars} alt="Star Icon" className="w-9 h-9" />
      </div>
      <div className="p-4 m-3">
        <img src={imgStars} alt="Star Icon" className="w-9 h-9" />
      </div>
    </div>
  );
}

export default ThreeStars;
