"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Meinterest",
    description: "A Pinterest-like website",
    image: "/images/projects/meinterest.png",
    tag: ["All", "Highlights"],
    gitUrl: "https://github.com/Eunini/meinterest",
    previewUrl: "https://meinterest-06.vercel.app/",
  },
  {
    id: 2,
    title: "uishop",
    description: "An e-commerce shopping webiste(front-end only)",
    image: "/images/projects/16.png",
    tag: ["All", "Highlights"],
    gitUrl: "https://github.com/Eunini/uishop",
    previewUrl: "https://uishop-rho.vercel.app",
  },
  {
    id: 3,
    title: "Nofomoe Landingpage",
    description: "A crytocurrency website landing page",
    image: "/images/projects/17.png",
    tag: ["All", "Highlights"],
    gitUrl: "https://github.com/Eunini/nofomoe-landingpage",
    previewUrl: "https://nofomoe-landingpage.vercel.app/",
  },
  {
    id: 4,
    title: "Creative Cue",
    description: "An AI prompt suggestion. A fullstack Next.js platform where you share and get good AI prompts.",
    image: "/images/projects/11.png",
    tag: ["All"],
    gitUrl: "https://github.com/Eunini/CreativeCue",
    previewUrl: "https://creative-cue-d2ry.vercel.app/",
  },
  {
    id: 5,
    title: "EasyBanking",
    description: "A sleek UI bank landing page template",
    image: "/images/projects/5.png",
    tag: ["All", "Highlights"],
    gitUrl: "https://github.com/Eunini/EasyBanking",
    previewUrl: "https://easy-banking-zqc6.onrender.com",
  },
  {
    id: 6,
    title: "FantasyDevs",
    description: "A Nextjs Landing Page Template",
    image: "/images/IMG-20241121-WA0022.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/Eunini/FantasyDevs",
    previewUrl: "https://fantasy-devs-8nic.vercel.app/",
  },
 ];
 
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Highlights"
          isSelected={tag === "Highlights"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
