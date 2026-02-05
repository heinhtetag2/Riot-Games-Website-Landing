import React from "react";
import img2XkoS1LaunchtrailerThumbnail16X9TextlessJpg from "figma:asset/62834cc40baa315418309d01c70fa7f9f8fa9194.png";
import imgImage from "figma:asset/14d3ad1c48202b9e70a1e960e9a2fb8a0d33a6a6.png";
import imgImage1 from "figma:asset/5c0e37ff02b6405e2984ff058489fea3bcabefea.png";
import imgImage2 from "figma:asset/23d94f1c8e68aeb56742608033254512111aeced.png";
import imgImage3 from "figma:asset/234800a90f0d0d314a7d1348ca6dff3948ce875c.png";
import svgPaths from "../../imports/svg-l258af8sh8";

export const WhatsHappening = () => {
  const newsItems = [
    {
      id: 1,
      title: "EP1: Fortune’s Dance | Lunar Revel 2026",
      type: "NEWS",
      image: imgImage,
      color: "#FFB400"
    },
    {
      id: 2,
      title: "Patch 7.0 Preview - League of Legends: Wild Rift",
      type: "NEWS",
      image: imgImage1,
      color: "#32C8FF"
    },
    {
      id: 3,
      title: "Dev Update: For Demacia",
      type: "NEWS",
      image: imgImage2,
      color: "#CDF564"
    },
    {
      id: 4,
      title: "Salvation (ft. Forts) | For Demacia 2025…",
      type: "NEWS",
      image: imgImage3,
      color: "#CDF564"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-12 md:py-20 px-4 md:px-20 text-white relative overflow-hidden">
      {/* Red Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div 
          className="w-[1440px] h-[940px] -scale-y-100"
          style={{ 
            backgroundImage: "radial-gradient(101.82% 66.467% at 50% 50%, rgba(163, 38, 41, 0.4) 0%, rgba(163, 38, 41, 0) 75%)" 
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-5xl font-black uppercase tracking-tight font-['Riot_Sans:Bold',sans-serif]">What's happening?</h2>
          <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-[4px] text-[10px] font-black uppercase tracking-widest transition-colors border border-white/5">
            See more
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Main Feature */}
          <div className="lg:col-span-2 group cursor-pointer flex flex-col h-full">
            <div className="relative flex-1 rounded-lg overflow-hidden border border-white/5 mb-6 min-h-[300px]">
              <img 
                src={img2XkoS1LaunchtrailerThumbnail16X9TextlessJpg} 
                alt="2XKO Season 1" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
            <div className="shrink-0">
              <h3 className="text-3xl font-black mb-3 tracking-tight">2XKO Season 1 2026 Launch Trailer</h3>
              <div className="flex items-center gap-2 text-white/40">
                <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 18 18">
                    <path d={svgPaths.p24a0070} fill="#CDF564" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">News</span>
              </div>
            </div>
          </div>

          {/* Sidebar News */}
          <div className="flex flex-col gap-4 h-full">
            {newsItems.map((item) => (
              <div key={item.id} className="flex-1 flex bg-[#1a1a1a] hover:bg-[#252423] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 border border-white/5 min-h-0">
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <h4 className="font-bold text-sm leading-tight line-clamp-2">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40">News</span>
                  </div>
                </div>
                <div className="w-[110px] shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
