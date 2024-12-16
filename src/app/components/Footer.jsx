import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link
            href={"/"}
            className="text-2xl md:text-5xl flex justify-center items-center text-white font-semibold"
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
        <p className="text-slate-600">All rights reserved | Inioluwa Atanda.</p>
      </div>
    </footer>
  );
};

export default Footer;
