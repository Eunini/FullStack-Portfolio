"use client";
import React, { useTransition, useState } from "react";
import { SiNextdotjs, SiRedux, SiReact, SiFirebase, SiJavascript, SiHtml5, SiCss3, SiDocker, SiGitforwindows, SiGithub, SiBootstrap, SiMongodb, SiPython, SiDjango, SiPhp, SiTailwindcss, SiReactrouter, SiMui, SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";
import {TbBrandThreejs, TbBrandNodejs} from "react-icons/tb";
import TabButton from "../components/TabButton";
import {FaAws} from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Frontend Technologies</h4>
          <ul className="flex flex-wrap gap-4 justify-start items-center">
            <li className="flex flex-col items-center">
              <SiReact size={40} title="React.js" className="text-blue-400" />
              <span className="text-xs text-gray-400 mt-1">React</span>
            </li>
            <li className="flex flex-col items-center">
              <SiNextdotjs size={40} title="Next.js" className="text-white" />
              <span className="text-xs text-gray-400 mt-1">Next.js</span>
            </li>
            <li className="flex flex-col items-center">
              <SiTypescript size={40} title="TypeScript" className="text-blue-600" />
              <span className="text-xs text-gray-400 mt-1">TypeScript</span>
            </li>
            <li className="flex flex-col items-center">
              <SiJavascript size={40} title="JavaScript" className="text-yellow-400" />
              <span className="text-xs text-gray-400 mt-1">JavaScript</span>
            </li>
            <li className="flex flex-col items-center">
              <SiRedux size={40} title="Redux" className="text-purple-500" />
              <span className="text-xs text-gray-400 mt-1">Redux</span>
            </li>
            <li className="flex flex-col items-center">
              <SiReactrouter size={40} title="React Router" className="text-red-500" />
              <span className="text-xs text-gray-400 mt-1">React Router</span>
            </li>
            <li className="flex flex-col items-center">
              <SiMui size={40} title="Material-UI" className="text-blue-500" />
              <span className="text-xs text-gray-400 mt-1">Material-UI</span>
            </li>
            <li className="flex flex-col items-center">
              <SiTailwindcss size={40} title="Tailwind CSS" className="text-cyan-400" />
              <span className="text-xs text-gray-400 mt-1">Tailwind</span>
            </li>
            <li className="flex flex-col items-center">
              <SiHtml5 size={40} title="HTML5" className="text-orange-500" />
              <span className="text-xs text-gray-400 mt-1">HTML5</span>
            </li>
            <li className="flex flex-col items-center">
              <SiCss3 size={40} title="CSS3" className="text-blue-400" />
              <span className="text-xs text-gray-400 mt-1">CSS3</span>
            </li>
            <li className="flex flex-col items-center">
              <SiBootstrap size={40} title="Bootstrap" className="text-purple-600" />
              <span className="text-xs text-gray-400 mt-1">Bootstrap</span>
            </li>
            <li className="flex flex-col items-center">
              <TbBrandThreejs size={40} title="Three.js" className="text-purple-600" />
              <span className="text-xs text-gray-400 mt-1">Three.js</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Backend Technologies</h4>
          <ul className="flex flex-wrap gap-4 justify-start items-center">
            <li className="flex flex-col items-center">
              <TbBrandNodejs size={40} title="Node.js" className="text-green-600" />
              <span className="text-xs text-gray-400 mt-1">Node.js</span>
            </li>
            <li className="flex flex-col items-center">
              <SiPython size={40} title="Python" className="text-blue-500" />
              <span className="text-xs text-gray-400 mt-1">Python</span>
            </li>
            <li className="flex flex-col items-center">
              <SiDjango size={40} title="Django" className="text-green-700" />
              <span className="text-xs text-gray-400 mt-1">Django</span>
            </li>
            <li className="flex flex-col items-center">
              <SiPhp size={40} title="PHP" className="text-indigo-500" />
              <span className="text-xs text-gray-400 mt-1">PHP</span>
            </li>
            <li className="flex flex-col items-center">
              <SiMongodb size={40} title="MongoDB" className="text-green-600" />
              <span className="text-xs text-gray-400 mt-1">MongoDB</span>
            </li>
            <li className="flex flex-col items-center">
              <SiMysql size={40} title="MySQL" className="text-blue-600" />
              <span className="text-xs text-gray-400 mt-1">MySQL</span>
            </li>
            <li className="flex flex-col items-center">
              <SiPostgresql size={40} title="PostgreSQL" className="text-blue-700" />
              <span className="text-xs text-gray-400 mt-1">PostgreSQL</span>
            </li>
            <li className="flex flex-col items-center">
              <SiFirebase size={40} title="Firebase" className="text-orange-500" />
              <span className="text-xs text-gray-400 mt-1">Firebase</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">DevOps & Tools</h4>
          <ul className="flex flex-wrap gap-4 justify-start items-center">
            <li className="flex flex-col items-center">
              <SiDocker size={40} title="Docker" className="text-blue-500" />
              <span className="text-xs text-gray-400 mt-1">Docker</span>
            </li>
            <li className="flex flex-col items-center">
              <FaAws size={40} title="AWS" className="text-orange-400" />
              <span className="text-xs text-gray-400 mt-1">AWS</span>
            </li>
            <li className="flex flex-col items-center">
              <SiGithub size={40} title="GitHub" className="text-gray-400" />
              <span className="text-xs text-gray-400 mt-1">GitHub</span>
            </li>
            <li className="flex flex-col items-center">
              <SiGitforwindows size={40} title="Git" className="text-orange-600" />
              <span className="text-xs text-gray-400 mt-1">Git</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BSc Computer Science</li>
        <li>University of Ibadan, Nigeria</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-gray-900 dark:text-white py-12 sm:py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mb-6 sm:mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              I&apos;m a passionate <span className="text-blue-600 dark:text-blue-400 font-medium">Full-Stack Developer</span> with 
              a keen eye for creating seamless digital experiences. My journey in software development began with 
              curiosity and has evolved into a deep commitment to building solutions that make a difference.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              From crafting responsive frontends with <span className="text-blue-600 dark:text-blue-400 font-medium">React</span> and
              <span className="text-blue-600 dark:text-blue-400 font-medium"> Next.js</span> to building robust backends with 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> Node.js</span> and managing cloud infrastructure, 
              I bring ideas to life through code. I thrive on solving complex problems and am always eager to 
              learn emerging technologies.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 sm:mb-16">
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-row justify-center sm:justify-start mb-6 sm:mb-8 space-x-2 sm:space-x-4">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
        </div>
        <div className="min-h-[300px]">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
    
  );
};

export default AboutSection;
