"use client";

import React from 'react';
import { getAssetPath } from '../../utils/assetPath';

const HomeSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative bg-cover bg-center" 
      style={{ backgroundImage: `url('${getAssetPath('/background.jpg')}')`}}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
      <div className="relative text-center p-8 rounded mt-[10%]">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-4 text-white">
          BRIAN FOHL
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base md:text-lg text-white">
          Engineering Leader & DevOps Architect
        </p>
      </div>
    </section>
  );
};

export default HomeSection;