"use client";
import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ubuy",
    description: "A modern e-commerce website specializing in mobile phones. Features intuitive product browsing, detailed specifications, and secure checkout process for seamless online shopping experience.",
    image: "/images/projects/ubuy.png",
    previewUrl: "https://u-buy-six.vercel.app/",
  },
  {
    id: 2,
    title: "Erande",
    description: "A comprehensive vendor dashboard platform that empowers sellers to showcase their products, manage inventory, track orders, and streamline their business operations with real-time analytics.",
    image: "/images/projects/erande.png",
    previewUrl: "https://test-vendor.useerande.com/",
  },
  {
    id: 3,
    title: "Ngwater",
    description: "An advanced water logging system designed for geologists to record, track, and analyze water data. Provides comprehensive tools for geological surveys and water resource management.",
    image: "/images/projects/ngwater.png",
    previewUrl: "https://ngwater.app/",
  },
  {
    id: 4,
    title: "Repropack",
    description: "An innovative Python project packaging solution that simplifies deployment across different machines. Enables one-click setup and seamless project migration with automated dependency management.",
    image: "/images/projects/repropack.png",
    previewUrl: "https://repro-pack-frontend.vercel.app/",
  },
 ];
 
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
          Here are some of my recent projects that showcase my skills in full-stack development, 
          innovative problem-solving, and creating user-centered digital experiences.
        </p>
        
        {/* View All Projects Button */}
        <div className="mb-6 sm:mb-8">
          <a
            href="https://github.com/Eunini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base lg:text-lg"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
