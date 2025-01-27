"use client";
import React, { useState, useEffect } from 'react'; 
import SearchBar from './SearchBar';

const images = [
  'url(/hero.jpg)',
  'url(/hero1.jpg)',
  'url(/hero2.jpg)',
  'url(/hero3.jpg)',
  'url(/hero4.jpg)', 
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center hero"
          style={{ backgroundImage: images[currentImage] }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">Tours & Travel</h2>
            <h1 className="text-4xl font-extrabold text-center text-white md:text-5xl lg:text-7xl">
              Discover Amazing <br /> Places With Us
            </h1>
            <div className="searchBar mt-4 w-full">
              <SearchBar/>
              <div className="flex flex-wrap gap-1 my-5 px-4 justify-center">
                <button type="button" className="px-3 py-2 text-xs font-medium text-center rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">Africa tours</button>
                <button type="button" className="px-3 py-2 text-xs font-medium text-center rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">Asia tours</button>
                <button type="button" className="px-3 py-2 text-xs font-medium text-center rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">Europe tours</button>
                <button type="button" className="px-3 py-2 text-xs font-medium text-center rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">Middle East tours</button>
                <button type="button" className="px-3 py-2 text-xs font-medium text-center rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">America tours</button>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
