"use client";

import { useState } from 'react';
import Image from 'next/image';
import logo from "@/images/logo.svg";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-2">
          <a
            href=" "
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
             <Image className='logo' src={logo} alt=''/>
             
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800    font-medium rounded-lg text-sm px-5 py-2.5 text-center   uppercase"
            >
              LOGIN
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'myAccount' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                  aria-current="page"
                  onClick={() => handleItemClick('myAccount')}
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'travelAgents' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                  onClick={() => handleItemClick('travelAgents')}
                >
                  Travel Agents
                </a>
              </li>
              <li>
                <ul className="flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                  <li className="relative group">
                    <button
                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'tour' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                      onClick={() => handleItemClick('tour')}
                    >
                      Tour
                    </button>
                    <ul className="absolute hidden group-hover:block shadow-sm w-44 bg-white border border-gray-100 rounded-lg mt-0">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          Africa tours
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          Asia tours
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          Europe tours
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          Middle East tours
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                        >
                          America tours
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'travelInsurance' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                  onClick={() => handleItemClick('travelInsurance')}
                >
                  Travel Insurance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'reviews' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                  onClick={() => handleItemClick('reviews')}
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
