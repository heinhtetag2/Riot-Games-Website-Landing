import React from "react";
import svgPaths from "../../imports/svg-6qtb20vx06";

export const SectionBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.07]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] md:w-[150%] aspect-square">
        <svg 
          viewBox="0 0 2617.6 1899.43" 
          className="w-full h-full text-[#ACACAC] fill-current"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d={svgPaths.pd4ff100} />
        </svg>
      </div>
    </div>
  );
};
