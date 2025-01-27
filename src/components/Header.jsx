"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from "@/images/logo.png";
import anniversarylogo from "@/images/anniversary_logo2025.png";
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
      <header className='fixed top-0 left-0 w-full shadow-md z-50'>
        <div className="topBar bg-blue-800 text-white">
          <div className=" max-w-screen-xl m-auto">
            <div className="hidden lg:flex row flex-wrap justify-between items-center">
              <div className="lg:w-7/12 px-5 text-left">
                <div className="h-full inline-flex items-center py-3 me-4">

                  <span className="text-sm font-medium "> <span className='text-yellow-300'>USA New Jersey Head Office</span> (973) 636-6660</span>
                </div>
              </div>
              <div className="lg:w-5/12 px-5 text-right hidden lg:block">

                <div className="flex items-center justify-end gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=100063769441297" target='_blank'
                    className="flex items-center justify-center w-8 h-8   border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white  "
                  >
                    <svg width={8} height={16} viewBox="0 0 8 16" className="fill-current">
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/righttravel" target='_blank'
                    className="flex items-center justify-center w-8 h-8   border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white   "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@righttravel1" target='_blank'
                    className="flex items-center justify-center w-8 h-8   border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white  "
                  >
                    <svg width={16} height={12} viewBox="0 0 16 12" className="fill-current">
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/travel-right-travel-agency" target='_blank'
                    className="flex items-center justify-center w-8 h-8  border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white  "
                  >
                    <svg width={14} height={14} viewBox="0 0 14 14" className="fill-current">
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>

                  <a
                    href="https://in.pinterest.com/righttravel/" target='_blank'
                    className="flex items-center justify-center w-8 h-8  border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke dark:border-dark-3 dark:hover:border-primary dark:text-white hover:text-white  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="currentColor"
                      className="bi bi-pinterest"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                    </svg>

                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <nav className="bg-white  w-full z-20   border-b border-gray-200">


          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-1">
          <Link href="/" passHref legacyBehavior>
            <a
              
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image className='logo bg-blue-800 rounded-full p-1' src={logo} alt='' />

            </a>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Image className='logo' src={anniversarylogo} alt='' />
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
                  <Link href="/" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'myAccount' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                      aria-current="page"
                      onClick={() => handleItemClick('myAccount')}
                    >
                      My Account
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'travelAgents' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                      onClick={() => handleItemClick('travelAgents')}
                    >
                      Travel Agents
                    </a>
                  </Link>
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
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              Africa tours
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              Asia tours
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              Europe tours
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              Middle East tours
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" passHref legacyBehavior>
                            <a

                              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 uppercase"
                            >
                              America tours
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'travelInsurance' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                      onClick={() => handleItemClick('travelInsurance')}
                    >
                      Travel Insurance
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref legacyBehavior>
                    <a

                      className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${activeItem === 'reviews' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'}`}
                      onClick={() => handleItemClick('reviews')}
                    >
                      Reviews
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
