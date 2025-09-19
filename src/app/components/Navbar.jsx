"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarOpen && window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarOpen]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl top-2 sm:top-4 rounded-xl sm:rounded-2xl w-[95%] sm:w-[90%] md:w-[70%] mx-auto"
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
        {/* Logo (Visible only before scroll) */}
        {!isScrolled && !navbarOpen && (
          <Link
            href={"/"}
            className="flex items-center space-x-2 sm:space-x-3 text-gray-900 dark:text-white font-bold text-lg sm:text-xl"
          >
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={32}
              height={32}
              className="sm:w-10 sm:h-10 rounded-full"
            />
            <span className="text-blue-600 dark:text-blue-400 text-xl sm:text-2xl">
              DEVINI
            </span>
          </Link>
        )}

        {/* Desktop Menu */}
        <div className={`${isScrolled ? "flex justify-center items-center w-full" : "hidden md:flex"}`}>
          <ul className={`flex ${isScrolled ? "flex-row space-x-6 lg:space-x-8" : "space-x-6 lg:space-x-8"}`}>
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link 
                  href={link.path} 
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 font-medium py-2 px-3 sm:px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-sm sm:text-base"
                >
                  {link.title}
                </Link>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />
          {!navbarOpen && !isScrolled && (
            <div className="block md:hidden">
              <button
                onClick={toggleNavbar}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white/95 dark:bg-black/90 z-50 flex flex-col items-center justify-center space-y-8">
          {/* Close Button */}
          <button
            onClick={toggleNavbar}
            className="absolute top-6 right-6 z-50 text-gray-900 dark:text-gray-200"
          >
            <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          {/* Links */}
          <ul className="text-center space-y-8 text-gray-900 dark:text-white text-lg z-50">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} onClick={closeNavbar} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
