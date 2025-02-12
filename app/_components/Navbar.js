"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(64);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setLogoSize(window.innerWidth < 640 ? 32 : 64);
    };

    handleResize(); // Set initial size based on viewport width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        console.log("handleClickOutside");
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="fixed w-full bg-[#ffffff59] backdrop-blur-sm dark:bg-[#17171759] z-30 py-4 lg:h-auto lg:py-4 transition-all">
      <nav className="container relative flex flex-wrap items-center justify-between px-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100">
              <Image
                src="/images/rachitlogo.png"
                alt="Logo"
                width={logoSize}
                height={logoSize}
                className="transition-all ease-linear rounded-full md:ml-8"
              />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex absolute right-8 lg:hidden">
            <button
              className="px-2 py-1 ml-4 text-gray-500 rounded-md lg:hidden hover:text-primary focus:bg-sky-100 dark:text-gray-300 dark:focus:bg-trueGray-700 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                // Close (X) Icon
                <svg
                  className="w-6 h-6 fill-current transition-transform duration-300 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg
                  className="w-6 h-6 fill-current transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:flex flex-col lg:flex-row lg:space-x-6 transition-all duration-300 ${
            menuOpen ? "block " : "hidden"
          }`}
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
      </nav>
    </div>
  );
};

export default Navbar;
