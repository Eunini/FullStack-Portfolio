import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active 
    ? "text-blue-600 dark:text-blue-400" 
    : "text-gray-600 dark:text-gray-400";

  return (
    <button onClick={selectTab} className="group">
      <p className={`mr-3 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-600 dark:bg-blue-400 mt-2 mr-3 rounded-full"
      ></motion.div>
    </button>
  );
};

export default TabButton;
