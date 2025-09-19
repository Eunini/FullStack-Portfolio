import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-gray-600 dark:border-t-gray-700 border-l-transparent border-r-transparent text-white dark:text-gray-200">
      <div className="container p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <Link
          href={"/"}
          className="text-xl md:text-2xl flex justify-center items-center text-white dark:text-gray-200 font-semibold mb-4 md:mb-0"
        >
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="px-2 md:px-3"
          />
          <span className="text-blue-500 dark:text-blue-400 text-base md:text-lg font-bold">DEVINI</span>
        </Link>
        
        {/* Footer Text */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs md:text-sm text-gray-400 dark:text-gray-300">
          <p className="text-center">
            © 2024 Inioluwa Atanda. All rights reserved.
          </p>
          <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center space-x-2">
            <span>Built with</span>
            <span className="text-blue-400 dark:text-blue-300">Next.js</span>
            <span>&</span>
            <span className="text-blue-400 dark:text-blue-300">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
