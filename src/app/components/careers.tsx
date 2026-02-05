import React from "react";
import imgPictureCareers1 from "figma:asset/7be7aea1cd2a10de4de4cce3d21cfda98d3209e6.png";

export const Careers = () => {
  return (
    <section className="bg-[#f9f9f9] flex flex-col md:flex-row overflow-hidden md:h-[700px] relative">
      {/* Information Side */}
      <div className="flex-[4] bg-[#f9f9f9] flex flex-col items-center justify-center p-8 md:p-24 text-center order-2 md:order-1 relative z-10">
        <h2 className="text-4xl md:text-7xl font-black text-[#111] mb-4 md:mb-8 tracking-tighter font-['Riot_Sans:Bold',sans-serif] uppercase">We’re hiring!</h2>
        <p className="text-[#656462] text-sm md:text-lg mb-10 md:mb-16 max-w-md mx-auto leading-relaxed font-medium">
          Team up with Riot to forge your path and craft unforgettable experiences for players
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16 w-full max-w-lg">
          <div className="bg-[#ebebeb] rounded-lg p-6 md:p-10 flex-1 text-center group hover:bg-[#e2e2e2] transition-colors">
            <div className="text-4xl md:text-7xl font-black text-[#111] mb-1 group-hover:scale-105 transition-transform">152</div>
            <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#656462]">Open positions</div>
          </div>
          <div className="bg-[#ebebeb] rounded-lg p-6 md:p-10 flex-1 text-center group hover:bg-[#e2e2e2] transition-colors">
            <div className="text-4xl md:text-7xl font-black text-[#111] mb-1 group-hover:scale-105 transition-transform">26</div>
            <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#656462]">Offices</div>
          </div>
        </div>

        <button className="bg-[#d13639] hover:bg-[#eb3e42] text-white text-[11px] md:text-xs font-black tracking-[0.2em] px-10 md:px-20 py-4 md:py-6 rounded-full transition-all uppercase active:scale-95 shadow-2xl shadow-red-500/30">
          Explore Careers
        </button>
      </div>

      {/* Image Side with Diagonal Cut */}
      <div className="flex-[5] relative overflow-hidden h-[350px] md:h-auto order-1 md:order-2">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* Desktop Slant Overlay */}
          <div className="hidden md:block absolute top-0 left-0 bottom-0 w-32 bg-[#f9f9f9] -translate-x-1/2 -skew-x-[8deg] z-10" />
          {/* Mobile Slant Overlay */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-16 bg-[#f9f9f9] translate-y-1/2 -skew-y-[3deg] z-10" />
          
          <img 
            src={imgPictureCareers1} 
            alt="Careers at Riot" 
            className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-blue-500/5 mix-blend-multiply pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
