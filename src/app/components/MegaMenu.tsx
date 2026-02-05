import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../../imports/svg-lvzxdtxuni";
import valorantImg from "figma:asset/c53376f203d56ec32ba5a0956fbebcf62cb152a8.png";
import tftImg from "figma:asset/e20e3407d43dc83ab0323f0a574bd8bbf86e2dfb.png";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavCategory = ({ title, links }: { title: string; links: string[] }) => (
  <div className="flex flex-col mb-4 last:mb-0">
    <div className="bg-[#F2F2F2] py-2 px-4 rounded-[4px] mb-4">
      <h3 className="text-[11px] font-bold tracking-[0.15em] text-[#111] uppercase">
        {title}
      </h3>
    </div>
    <ul className="flex flex-col gap-2.5 px-4 pb-2">
      {links.map((link) => (
        <li key={link}>
          <a 
            href="#" 
            className="text-[11px] font-bold tracking-[0.05em] text-[#5e5e5e] hover:text-[#111] transition-colors uppercase block"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const MobileAccordionItem = ({ title, links }: { title: string; links: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#F2F2F2] py-4 px-5 rounded-[8px] transition-colors active:bg-[#EAEAEA]"
      >
        <span className="text-[13px] font-bold tracking-[0.08em] text-[#111] uppercase">{title}</span>
        <ChevronDown 
          className={`w-4 h-4 text-[#666] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col py-3 px-5 gap-3.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[12px] font-bold tracking-[0.05em] text-[#5e5e5e] hover:text-[#111] transition-colors uppercase block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[-1]"
          />
          
          {/* The Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.35, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="w-full bg-[#F9F9F9] text-black border-b border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-10 sticky top-0 bg-[#F9F9F9] z-10">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 26 26" fill="none">
                  <path d={svgPaths.p1a8d6180} fill="#111" />
                  <path d={svgPaths.p1d41d6f0} fill="#F9F9F9" />
                  <path d={svgPaths.p1e029600} fill="#F9F9F9" />
                </svg>
                <div className="flex items-center gap-1">
                  <svg className="h-6 md:h-7" viewBox="0 0 85.0004 27" fill="none">
                    <path d={svgPaths.p72d9480} fill="#111" />
                  </svg>
                  <div className="w-2.5 h-1.5 bg-[#666] mt-0.5 md:hidden" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 md:w-9 md:h-9 flex items-center justify-center bg-[#EDEDED] hover:bg-[#E2E2E2] rounded-[12px] md:rounded-[12px] transition-colors group"
              >
                <X className="w-4 h-4 md:w-3.5 md:h-3.5 text-black" strokeWidth={3} />
              </button>
            </div>

            {/* Content Container */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              className="max-w-[1440px] mx-auto px-6 md:px-10 py-2 pb-12"
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-12 md:gap-6 lg:gap-10">
                <div className="md:col-span-2">
                  <NavCategory 
                    title="GAMES" 
                    links={["LEAGUE OF LEGENDS", "VALORANT", "TEAMFIGHT TACTICS", "LEGENDS OF RUNETERRA", "LOL: WILD RIFT", "RIFTBOUND", "2XKO"]} 
                  />
                </div>
                <div className="md:col-span-2">
                  <NavCategory 
                    title="FORGE" 
                    links={["CONV/RGENCE", "HEXTECH MAYHEM", "THE MAGESEEKER", "RUINED KING", "SONG OF NUNU", "RIOT FORGE GAMES"]} 
                  />
                  <NavCategory 
                    title="ESPORTS" 
                    links={["LOL ESPORTS", "VALORANT ESPORTS"]} 
                  />
                </div>
                <div className="md:col-span-2">
                  <NavCategory 
                    title="ENTERTAINMENT" 
                    links={["ARCANE", "UNIVERSE", "RIOT GAMES MUSIC"]} 
                  />
                  <div className="mt-2">
                    <NavCategory 
                      title="BUSINESS" 
                      links={["RIOT GAMES", "RIOT MERCH", "RIOT MOBILE", "RIOT SUPPORT"]} 
                    />
                  </div>
                </div>
                <div className="md:col-span-6 grid grid-cols-2 gap-6 items-start pt-1">
                  <div className="group cursor-pointer">
                    <div className="aspect-[1.5/1] rounded-[4px] overflow-hidden mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                      <ImageWithFallback
                        src={tftImg}
                        alt="Featured TFT"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <p className="text-[11px] font-bold tracking-[0.02em] text-[#5e5e5e] leading-[1.4] group-hover:text-black transition-colors">
                      Reawaken iconic Runeterran stories in TFT's biggest set yet!
                    </p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="aspect-[1.5/1] rounded-[4px] overflow-hidden mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                      <ImageWithFallback
                        src={valorantImg}
                        alt="Featured Valorant"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <p className="text-[11px] font-bold tracking-[0.02em] text-[#5e5e5e] leading-[1.4] uppercase group-hover:text-black transition-colors">
                      VALORANT SEASON 26 ACT I STARTS NOW: JOIN THE CONFLICT
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Layout (Accordions) */}
              <div className="md:hidden flex flex-col gap-1">
                <MobileAccordionItem 
                  title="GAMES" 
                  links={["LEAGUE OF LEGENDS", "VALORANT", "TEAMFIGHT TACTICS", "LEGENDS OF RUNETERRA", "LOL: WILD RIFT", "RIFTBOUND", "2XKO"]} 
                />
                <MobileAccordionItem 
                  title="FORGE" 
                  links={["CONV/RGENCE", "HEXTECH MAYHEM", "THE MAGESEEKER", "RUINED KING", "SONG OF NUNU", "RIOT FORGE GAMES"]} 
                />
                <MobileAccordionItem 
                  title="ESPORTS" 
                  links={["LOL ESPORTS", "VALORANT ESPORTS"]} 
                />
                <MobileAccordionItem 
                  title="ENTERTAINMENT" 
                  links={["ARCANE", "UNIVERSE", "RIOT GAMES MUSIC"]} 
                />
                <MobileAccordionItem 
                  title="BUSINESS" 
                  links={["RIOT GAMES", "RIOT MERCH", "RIOT MOBILE", "RIOT SUPPORT"]} 
                />

                {/* Featured Content on Mobile */}
                <div className="mt-8 flex flex-col gap-8">
                  <div className="group">
                    <div className="aspect-[1.4/1] rounded-[8px] overflow-hidden mb-4">
                      <ImageWithFallback
                        src={tftImg}
                        alt="Featured TFT"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[13px] font-medium text-[#111] leading-[1.5]">
                      Reawaken iconic Runeterran stories in TFT's biggest set yet!
                    </p>
                  </div>

                  <div className="group">
                    <div className="aspect-[1.4/1] rounded-[8px] overflow-hidden mb-4">
                      <ImageWithFallback
                        src={valorantImg}
                        alt="Featured Valorant"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[13px] font-medium text-[#111] leading-[1.5] uppercase">
                      VALORANT SEASON 26 ACT I STARTS NOW: JOIN THE CONFLICT
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
