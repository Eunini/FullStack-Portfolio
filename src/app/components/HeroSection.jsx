"use client";
import React, { Suspense, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownloadCV = async (e) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      // Try API route first for forced download
      const response = await fetch('/api/download-cv');
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Inioluwa_Atanda_CV.pdf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('API route failed');
      }
    } catch (error) {
      console.error('Error downloading CV via API, trying direct download:', error);
      
      // Fallback: Try direct blob download
      try {
        const response = await fetch('/CV.pdf');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Inioluwa_Atanda_CV.pdf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        window.URL.revokeObjectURL(url);
      } catch (fallbackError) {
        console.error('Fallback download failed, using simple link:', fallbackError);
        
        // Final fallback: Simple link with download attribute
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'Inioluwa_Atanda_CV.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="lg:py-16" aria-label="Hero section" role="banner">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-gray-900 dark:text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-extrabold">
            <span className="text-gray-900 dark:text-white">
              Hi, I&apos;m{" "}
              <span itemProp="name" className="text-blue-600 dark:text-blue-400">
                Inioluwa Atanda
              </span>
            </span>
            <br></br>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 dark:text-gray-400 font-medium">
              I&apos;m a{" "}
            </span>
            <Suspense fallback={<span className="text-blue-600 dark:text-blue-400">Full-Stack Developer</span>}>
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
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-2xl mb-6 sm:mb-8" itemProp="description">
            Crafting digital experiences that matter. I transform complex problems into elegant solutions, 
            building scalable web applications with <strong>React, Next.js, Node.js, Python, and Django</strong>. 
            Specialized in full-stack development, cloud computing, and DevOps practices.
            <span className="text-blue-600 dark:text-blue-400 font-medium"> Let&apos;s create something extraordinary together.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" role="group" aria-label="Call to action buttons">
            <Link
              href="#contact"
              className="px-6 sm:px-8 inline-block py-3 sm:py-4 w-full sm:w-fit rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-base sm:text-lg transition-colors duration-300 text-center"
              aria-label="Navigate to contact section to work together"
            >
              Let&apos;s Work Together
            </Link>
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="px-6 sm:px-8 inline-block py-3 sm:py-4 w-full sm:w-fit rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-base sm:text-lg transition-all duration-300 text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              aria-label="Download Inioluwa Atanda's resume PDF"
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </>
              )}
            </button>
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
              alt="Inioluwa Atanda - Professional Full-Stack Developer and Software Engineer specializing in React, Next.js, Node.js, Python, and Django"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={320}
              height={320}
              priority
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 400px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2G4+E1FvFeHLG3ImkN0g9s0xhyW7a2VWa5Df7KTMSE0EcyQTM1eXyULQC7FZ4xmvFipCOnFgC0MG0lOdQdgz5LyuMLJZOGaS3jKeJUVa1KlWgGipmj/9k="
              itemProp="image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;