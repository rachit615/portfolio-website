"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full bg-[#ffffff59] backdrop-blur-sm dark:bg-[#17171759] z-30 h-24 py-4 lg:h-auto lg:py-4 transition-all">
      <nav className="container relative flex flex-wrap items-center justify-between px-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100">
              <Image
                src="/images/rachitlogo.png"
                alt="Logo"
                width={64}
                height={64}
                className="transition-all ease-linear rounded-full ml-8 "
              />
            </span>
          </Link>
          <div className="flex absolute right-8 lg:hidden">
            <button className="text-gray-300 rounded-full outline-none focus:outline-none">
              <span className="sr-only">Light Mode</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
            <button
              className="px-2 py-1 ml-4 text-gray-500 rounded-md lg:hidden hover:text-primary focus:bg-sky-100 dark:text-gray-300 dark:focus:bg-trueGray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`lg:flex items-center ${
            menuOpen ? "block" : "hidden"
          } mr-8`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            {[
              "Chronicles",
              "Why me?",
              "Technologies",
              "Showcase",
              "Life Unplugged",
            ].map((item) => (
              <li key={item} className="nav__item">
                <Link
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="inline-block px-4 py-2 text-base font-normal text-gray-800 dark:text-gray-200 hover:text-primary focus:text-primary focus:bg-gray-100 dark:focus:bg-gray-800 rounded-md"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-300 rounded-full outline-none focus:outline-none">
            <span className="sr-only">Light Mode</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
          <a
            href="https://calendly.com/connect-mayankkhanna/30min"
            target="_blank"
            className="px-6 py-2 text-white bg-primary rounded-md"
          >
            Get in Touch
          </a>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
