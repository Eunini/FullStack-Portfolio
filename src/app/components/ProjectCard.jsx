import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div className="group">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        <div
          className="h-48 sm:h-56 md:h-64 lg:h-72 relative group/image"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          <div className="overlay items-center justify-center absolute inset-0 bg-gray-900 dark:bg-black bg-opacity-0 group-hover/image:bg-opacity-80 transition-all duration-300 flex">
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover/image:opacity-100 transform scale-75 group-hover/image:scale-100 transition-all duration-300"
            >
              <div className="bg-blue-600 hover:bg-blue-700 p-3 sm:p-4 rounded-full transition-colors duration-300">
                <EyeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </Link>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
