"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { SiNextdotjs, SiRedux, SiReact, SiFirebase, SiJavascript, SiHtml5, SiCss3, SiDocker, SiGitforwindows, SiGithub, SiBootstrap, SiMongodb, SiPython } from "react-icons/si";
import {TbBrandThreejs, TbBrandNodejs} from "react-icons/tb";
import AchievementsSection from "../components/AchievementsSection";
import TabButton from "../components/TabButton";
import {FaAws} from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap gap-4 justify-start items-center">
        <li className="flex flex-col items-center">
          <SiNextdotjs size={40} title="Next.js" className="text-purple-500" />
        </li>
        <li className="flex flex-col items-center">
          <SiReact size={40} title="React.js" className="text-blue-500" />
        </li>
        <li className="flex flex-col items-center">
          <SiRedux size={40} title="Redux" className="text-purple-500" />
        </li>
        <li className="flex flex-col items-center">
          <SiFirebase size={40} title="firebase" className="text-red-500" />
        </li>
        <li className="flex flex-col items-center">
          <SiJavascript size={40} title="JavaScript" className="text-yellow-400" />
        </li>
        <li className="flex flex-col items-center">
          <SiHtml5 size={40} title="HTML5" className="text-orange-500" />
        </li>
        <li className="flex flex-col items-center">
          <SiCss3 size={40} title="CSS3" className="text-blue-400" />
        </li>
        <li className="flex flex-col items-center">
          <TbBrandNodejs size={40} title="Nodejs" className="text-green-600" />
        </li>
        <li className="flex flex-col items-center">
          <SiMongodb size={40} title="MongoDB" className="text-green-600" />
        </li>
        <li className="flex flex-col items-center">
          <SiGithub size={40} title="Github" className="text-gray-600" />
        </li>
        <li className="flex flex-col items-center">
          <TbBrandThreejs size={40} title="Three.js" className="text-purple-600" />
        </li>
        <li className="flex flex-col items-center">
          <SiGitforwindows size={40} title="Git" className="text-green-600" />
        </li>
        <li className="flex flex-col items-center">
          <FaAws size={40} title="Git" className="text-blue-600" />
        </li>
        <li className="flex flex-col items-center">
          <SiBootstrap size={40} title="Bootstrap" className="text-purple-600" />
        </li>
        <li className="flex flex-col items-center">
          <SiPython size={40} title="Python" className="text-blue-500" />
        </li>
        <li className="flex flex-col items-center">
          <SiDocker size={40} title="Docker" className="text-blue-500" />
        </li>
      </ul>
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
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificate of Participation in Web Design for Girls- Shining Stars Global Impact Foundation</li>
        <li>Certificate of Participation in Leadership Training Program - Build-in-a-Box</li>
        <li>Certificate of Excellence - Nigerian Asociation of Computing Students, University of Ibadan.</li>
        <li>Certificate of Achievment in Web Development Course - Entrepreneurship Development Initiative Programme 2022</li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="aboutimage" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            tAILWIND.CSS, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>

      <AchievementsSection />
    </section>
    
  );
};

export default AboutSection;
