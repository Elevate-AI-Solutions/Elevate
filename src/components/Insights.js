"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const insights = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+ years", label: "Team Experience" },
  { value: "4+", label: "Team Members" },
  { value: "20+", label: "Projects Completed" },
];

const Insights = () => {
  return (
    <div className="py-10 backdrop-blur-sm bg-white/15 p-0">
      {/* Marquee for small screens */}
      <div className="block lg:hidden">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          className="gap-20">
          {insights.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] flex flex-col items-center justify-center mx-5">
              <h3 className="text-3xl lg:text-4xl font-bold text-yellow-400">
                {item.value}
              </h3>
              <p className="text-white text-lg">{item.label}</p>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Static layout for desktop */}
      <div className="hidden lg:flex justify-around items-center max-w-6xl mx-auto px-4">
        {insights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-yellow-400">
              {item.value}
            </h3>
            <p className="text-white text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
