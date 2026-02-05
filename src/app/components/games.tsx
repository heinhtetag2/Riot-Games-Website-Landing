import React from "react";
import useEmblaCarousel from "embla-carousel-react";

// Existing high-res assets
import imgLeagueHighRes from "figma:asset/2358368c38b938c6e0258306e64c1cad86a89159.png";
import imgValorantHighRes from "figma:asset/bfaa6c7301d710f3a3cdf9fcbefde3c0fd0dbd2a.png";

// Core assets
import imgLolHomepagecarousellogoPng from "figma:asset/963cd2c9cd11f609868b7f393905dd0b4e3c497b.png";
import imgValHomepagecarousellogoPng from "figma:asset/60072c2e9ff87c375fa1df59b4024265293d710c.png";
import img2XkoHomepageProductcard2Png from "figma:asset/beaf9da4d9983ebd028c7a82d566d738f2ad084d.png";
import img2XkoEarlyaccessHomepagecarousellogoPng from "figma:asset/28ccbbd18ec44fbaa26852bfe85b4df9192ff1df.png";
import imgRiftboundHomepageProductcard1Png from "figma:asset/d24c0effc506f3f7dc9f9ff52a50d964c5a62e02.png";
import imgRiftboundHomepagecarousellogoPng from "figma:asset/d5760ffc42819e264ac0158c1108bbf426611b2b.png";

// New assets from Frame53-15-988.tsx (to be placed at the end)
import imgLeagueScreenshotArt from "figma:asset/312d6235f8bb85d5a4256f51390633eb8a42cc54.png";
import imgValScreenshotArt1 from "figma:asset/74e9f466bda6241f50bfb937c845a6da4e884fc6.png";
import imgValScreenshotArt2 from "figma:asset/bbcf3375935bcd9b136357d8b3680afc14a6bc04.png";

import { SectionBackground } from "./section-background";
import svgPaths from "../../imports/svg-6qtb20vx06";

export const Games = () => {
  const [emblaRef] = useEmblaCarousel({ 
    dragFree: true, 
    containScroll: "trimSnaps",
    align: "center",
    duration: 30
  });

  const games = [
    {
      id: 1,
      name: "2XKO",
      logo: img2XkoEarlyaccessHomepagecarousellogoPng,
      image: img2XkoHomepageProductcard2Png,
      platforms: ["windows"]
    },
    {
      id: 2,
      name: "Riftbound",
      logo: imgRiftboundHomepagecarousellogoPng,
      image: imgRiftboundHomepageProductcard1Png,
      platforms: ["mobile"]
    },
    {
      id: 3,
      name: "League of Legends (Classic)",
      logo: imgLolHomepagecarousellogoPng,
      image: imgLeagueHighRes,
      platforms: ["windows", "mac"]
    },
    {
      id: 4,
      name: "VALORANT (Classic)",
      logo: imgValHomepagecarousellogoPng,
      image: imgValorantHighRes,
      platforms: ["windows", "playstation", "xbox"]
    },
    {
      id: 5,
      name: "League of Legends (Screenshot)",
      logo: imgLolHomepagecarousellogoPng,
      image: imgLeagueScreenshotArt,
      platforms: ["windows", "mac"]
    },
    {
      id: 6,
      name: "VALORANT (Art 1)",
      logo: imgValHomepagecarousellogoPng,
      image: imgValScreenshotArt1,
      platforms: ["windows", "playstation", "xbox"]
    },
    {
      id: 7,
      name: "VALORANT (Art 2)",
      logo: imgValHomepagecarousellogoPng,
      image: imgValScreenshotArt2,
      platforms: ["windows", "playstation", "xbox"]
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 text-white relative overflow-hidden">
      <SectionBackground />
      
      <div className="w-full relative z-10">
        {/* Title Container */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-20">
          <h2 className="text-5xl font-black uppercase tracking-tight mb-16 font-['Riot_Sans:Bold',sans-serif] select-none">Games</h2>
        </div>
        
        {/* Horizontal Scroll Container (Embla Viewport) */}
        <div 
          ref={emblaRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing w-full"
        >
          {/* Embla Container */}
          <div className="flex flex-row -space-x-12 lg:-space-x-16 pb-10">
            {/* Initial spacer for better centering start */}
            <div className="flex-none w-[max(1rem,calc((100vw-1440px)/2+1rem))] md:w-[max(5rem,calc((100vw-1440px)/2+5rem))]" />

            {games.map((game, index) => (
              <div 
                key={game.id} 
                className="relative flex-none w-[260px] sm:w-[280px] lg:w-[320px] h-[480px] sm:h-[550px] md:h-[600px] group cursor-pointer transition-all duration-500 hover:z-20 hover:-translate-y-4 select-none"
                style={{
                  clipPath: "polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={game.image} 
                    alt={game.name} 
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:brightness-110 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-65 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                  {/* Subtle Light Overlay Effect */}
                  <div className="absolute inset-0 bg-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-between py-12 px-10 pointer-events-none">
                  <div className="w-full flex justify-center mt-4">
                    <img 
                      src={game.logo} 
                      alt={game.name} 
                      className="max-h-12 w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="w-full flex justify-end gap-2 pr-8 pb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    {game.platforms.includes("windows") && (
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                        <path d={svgPaths.p16b127c0} />
                      </svg>
                    )}
                    {game.platforms.includes("mac") && (
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 17 20">
                        <path d={svgPaths.p1708bd00} />
                      </svg>
                    )}
                    {game.platforms.includes("mobile") && (
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 7 11">
                        <path d={svgPaths.p2356a680} />
                      </svg>
                    )}
                    {game.platforms.includes("playstation") && (
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 20 16">
                        <path d={svgPaths.p294b980} />
                      </svg>
                    )}
                    {game.platforms.includes("xbox") && (
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 21 21">
                        <path d={svgPaths.p3dd48c00} />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/* Trailing spacer */}
            <div className="flex-none w-40" />
          </div>
        </div>
      </div>
    </section>
  );
};
