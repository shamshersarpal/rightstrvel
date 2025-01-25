"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import tourOne from "@/images/tour-1.jpg"; 
import SearchBar from './SearchBar';
import TourBox from './TourBox';
 
export default function HeroSection() {
    

    return (
        <main>
            <div className="relative bg-cover bg-center h-screen hero"  >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">Tours & Travel</h2>

                <h1 className="text-4xl font-extrabold text-center text-white md:text-5xl lg:text-7xl">
  Discover Amazing <br /> Places With Us
</h1>
        <div className="searchBar mt-4 w-full">
              
             <div className="flex flex-warp gap-1 my-5 px-4 justify-center">
             <button type="button" className="px-3 py-2 text-xs font-medium text-center   rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">Africa tours</button>
             <button type="button" className="px-3 py-2 text-xs font-medium text-center   rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">Asia tours</button>
             <button type="button" className="px-3 py-2 text-xs font-medium text-center   rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">Europe tours</button>
             <button type="button" className="px-3 py-2 text-xs font-medium text-center   rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">Middle East tours</button>
             <button type="button" className="px-3 py-2 text-xs font-medium text-center   rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-100 text-blue-900">America tours</button>
             
             </div>
             <div className="text-center">
             <button
              type="button"
              className="px-6 py-3.5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800    font-medium rounded-lg text-sm px-5 py-2.5 text-center   uppercase"
            >
              Sell all Tours
            </button>
             </div>
        </div>
            </div>
        </div>
        
        </main>
    );
}
