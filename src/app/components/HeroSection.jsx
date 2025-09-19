"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-gray-900 dark:text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-extrabold">
            <span className="text-gray-900 dark:text-white">
              Hi, I&apos;m Inioluwa
            </span>
            <br></br>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 dark:text-gray-400 font-medium">
              I&apos;m a{" "}
            </span>
            <Suspense fallback={<div>Loading animation...</div>}>
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Tech Innovator",
                  2000,
                  "DevOps Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600 dark:text-blue-400"
              />
            </Suspense>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-2xl mb-6 sm:mb-8">
            Crafting digital experiences that matter. I transform complex problems into elegant solutions, 
            building scalable applications that bridge the gap between innovative technology and real-world impact. 
            <span className="text-blue-600 dark:text-blue-400 font-medium"> Let&apos;s create something extraordinary together.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="#contact"
              className="px-6 sm:px-8 inline-block py-3 sm:py-4 w-full sm:w-fit rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-base sm:text-lg transition-colors duration-300 text-center"
            >
              Let&apos;s Work Together
            </Link>
            <Link
              href="/CV.pdf"
              download="Inioluwa_Atanda_CV.pdf"
              className="px-6 sm:px-8 inline-block py-3 sm:py-4 w-full sm:w-fit rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-base sm:text-lg transition-all duration-300 text-center"
            >
              Download Resume
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gray-200 dark:bg-gray-800 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] relative shadow-lg dark:shadow-xl">
            <Image
              src="/images/hero-image.png"
              alt="Inioluwa Atanda - Full Stack Developer"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={320}
              height={320}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;