import React from "react";
import imgHomepageHeroGeneralBrandPng from "figma:asset/36e22d6936a4298d1910525d628a77d05b6eeb98.png";

export const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[780px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with image fallback */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={imgHomepageHeroGeneralBrandPng}
        >
          <source src="/rg-brand-cinematic.mp4" type="video/mp4" />
        </video>
        {/* Riot Red Gradient Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.4) 50%, rgba(209, 54, 57, 0.3) 100%)" 
          }}
        />
        {/* Right side glow */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-60"
          style={{ 
            backgroundImage: "radial-gradient(circle at 100% 50%, #d13639 0%, transparent 70%)" 
          }}
        />
      </div>

      {/* Center Logo - Removed as requested */}
      <div className="relative z-10 flex flex-col items-center">
      </div>
    </section>
  );
};
