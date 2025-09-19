"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: 50,
    postfix: "+",
  },
  {
    metric: "Users",
    value: 100,
    postfix: "+",
  },
  {
    metric: "Awards",
    value: 5,
  },
  {
    metric: "Years",
    value: 4,
    postfix: "+",
  },
];

const AchievementsSection = () => {
  const [animatedValues, setAnimatedValues] = useState(
    achievementsList.map(() => 0) 
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Set animated values to actual achievement values
      setAnimatedValues(achievementsList.map((item) => item.value));
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}
              <AnimatedNumbers
                includeComma
                animateToNumber={animatedValues[index]}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(value, i) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (i + 1),
                })}
              />
              {achievement.postfix || ""}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;