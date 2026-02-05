import React from "react";
import imgLolEsportsLogoFullPng from "figma:asset/d88daea5f7ed9747f2cc2d600dc055edf027742b.png";
import imgBackground17 from "figma:asset/8ce311c8db2f265f944071ae7bc547577588c306.png";
import imgVctLogoVFullRgbWhitePng from "figma:asset/53cdf167e6b67ca70a6bd17b1af63c7017966ec7.png";
import imgBackground18 from "figma:asset/206f4bc55e71e968e3195579ad66df3a6e8db0d1.png";
import imgTpcLogoPng from "figma:asset/0af498cbf85d0f80eaf90ec602cee2394a8c3068.png";
import imgBackground19 from "figma:asset/12fb14d3e7879fd73483c15e6973f2b1c8056ea4.png";
import imgArcaneLogoFlatwhitePng from "figma:asset/6e29690b5008c75e4112fc0619026bfd25b5f70f.png";
import imgBackground20 from "figma:asset/d1593dc09783ed2734093cb33d1b03162b76878e.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionBackground } from "./section-background";

export const Esports = () => {
  const items = [
    { id: 1, logo: imgLolEsportsLogoFullPng, bg: imgBackground17 },
    { id: 2, logo: imgVctLogoVFullRgbWhitePng, bg: imgBackground18 },
    { id: 3, logo: imgTpcLogoPng, bg: imgBackground19 },
    { id: 4, logo: imgArcaneLogoFlatwhitePng, bg: imgBackground20 },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 px-4 md:px-20 text-white relative overflow-hidden">
      <SectionBackground />
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-black uppercase tracking-tight font-['Riot_Sans:Bold',sans-serif]">Esports & Entertainment</h2>
          <div className="flex gap-3">
            <button className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors opacity-30 cursor-not-allowed border border-white/5">
              <ChevronLeft size={20} />
            </button>
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/10">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative aspect-[16/10] rounded-xl overflow-hidden group cursor-pointer border border-white/5 bg-[#111]">
              <img 
                src={item.bg} 
                alt="Background" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <img 
                  src={item.logo} 
                  alt="Logo" 
                  className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
