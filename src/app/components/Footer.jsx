import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row items-center justify-between">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl flex justify-center items-center text-white font-semibold mb-6 md:mb-0"
        >
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="px-3"
          />
          <span className="text-purple-500 text-lg font-bold">DEVINI</span>
        </Link>
        
        {/* Footer Text */}
        <p className="text-slate-600 text-center md:text-left">
          All rights reserved | Inioluwa Atanda.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
