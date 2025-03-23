"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
      className={`fixed z-10 top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent top-[10px] backdrop-blur-lg shadow-[0_4px_7px_rgba(128,90,213,0.6)] p-2 justify-center items-center rounded-lg w-[80%] mx-auto text-center"
          : "bg-[#121212] border-b border-[#33353F] justify-around"
      }`}
    >
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
        {/* Logo (Visible only before scroll) */}
        {!isScrolled && !navbarOpen && (
          <Link
            href={"/"}
            className="text-2xl md:text-5xl flex justify-center items-center text-white font-semibold"
          >
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="px-3 spin-animation"
            />
            <span className="text-purple-500 text-lg font-bold">DEVINI</span>
          </Link>
        )}

        {/* Hamburger Menu */}
        {!navbarOpen && !isScrolled && (
          <div className="mobile-menu block md:hidden">
            <button
              onClick={toggleNavbar}
              className="flex items-center px-3 py-2 text-slate-200"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          </div>
        )}

        {/* Desktop Menu */}
        <div
          className={`${
            isScrolled
              ? "flex justify-center items-center w-full mx-auto font-base"
              : "menu hidden md:flex right-0"
          } md:w-full`}
        >
          <ul
            className={`flex ${
              isScrolled
                ? "flex-row text-purple-500 font-base"
                : "py-2 md:py-4 md:p-0 md:flex-row md:space-x-8 justify-end w-full text-white"
            } mt-0`}
          >
            {navLinks.map((link, index) => (
              <li key={index} className="relative group px-2 md:px-4">
                <Link href={link.path} passHref>
                  <span>{link.title}</span>
                </Link>
                <span className="absolute bottom-0 left-0 block h-[2px] w-full bg-purple-500 scale-x-0 transform transition-all duration-300 group-hover:scale-x-100" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8">
          {/* Close Button */}
          <button
            onClick={toggleNavbar}
            className="absolute top-6 right-6 z-50 text-slate-200"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>

          {/* Links */}
          <ul className="text-center space-y-8 text-white text-lg z-50">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} onClick={closeNavbar}>
                  <span>{link.title}</span>
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
