"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import tourOne from "@/images/tour-1.jpg";
export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        
        { content: <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 p-4 m-auto">
                <h1 className='text-5xl font-bold'>Go With Greece Tours</h1>
                <p className='text-lg text-white-500 py-3'>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
                <button type="button" class="px-6 py-3.5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase ">See all tours</button>
            </div>
            <div className="w-full sm:w-1/2 p-4">
               <div className="bg-white p-3 shadow border rounded-lg">
               <Image className='h-auto max-w-full rounded-lg' src={tourOne} alt='ss'/>
               </div>
            </div>
          </div>
          
           },
        { content: <div>gh</div> },
        { content:  <div>dd</div> },
        { content: <h2>dsgfghddj</h2> }
    ];

    const showItem = (index) => {
        setCurrentIndex(index);
    };

    const nextItem = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const interval = setInterval(nextItem, 53000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <main>
            <div className="relative bg-cover bg-center h-screen hero"  >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <div id="default-carousel" className="relative w-full max-w-screen-xl" data-carousel="slide">
                    <div className="relative    rounded-lg ">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={` inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                data-carousel-item=""
                            >
                                {item.content}
                            </div>
                        ))}
                    </div>
                    <div className="absolute hidden z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                                aria-current={index === currentIndex}
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => showItem(index)}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="hidden absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev=""
                        onClick={prevItem}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="hidden absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next=""
                        onClick={nextItem}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        </main>
    );
}
