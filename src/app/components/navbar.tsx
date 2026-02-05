import React, { useState, useEffect } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import svgPaths from "../../imports/svg-lvzxdtxuni";
import { MegaMenu } from "./MegaMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 md:h-20 px-4 md:px-8 transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-[#111]" : "bg-transparent"
        } text-white`}
      >
        <div className="flex items-center h-full">
          {/* Riot Games Logo Group */}
          <div className="flex items-center h-full">
            {/* Riot Games Full Logo with Dropdown */}
            <div className="flex items-center h-full">
              <div 
                className="flex items-center cursor-pointer group/logo pr-6 md:pr-8 h-full"
                onClick={() => setIsMegaMenuOpen(true)}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 26 26" fill="none">
                    <path d={svgPaths.p1a8d6180} fill="#F1F5F1" />
                    <path d={svgPaths.p1d41d6f0} fill="#050505" />
                    <path d={svgPaths.p1e029600} fill="#050505" />
                  </svg>
                  <div className="flex items-center gap-1.5">
                    <svg className="h-5 md:h-6" viewBox="0 0 85.0004 27" fill="none">
                      <path d={svgPaths.p72d9480} fill="#F9F9F9" />
                    </svg>
                    <div className="w-2.5 h-1.5 bg-[#666] group-hover/logo:bg-white transition-colors mt-0.5" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
                  </div>
                </div>
              </div>
              
              {/* Vertical Divider */}
              <div className="w-[1px] h-6 md:h-8 bg-white/15 self-center" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center ml-12 gap-1 h-full">
            {["Who We Are", "Work with us", "News"].map((item) => (
              <div key={item} className="relative h-full flex items-center group">
                <a 
                  href="#" 
                  className="text-[11px] font-black tracking-[0.12em] uppercase px-5 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  {item}
                </a>
                <div className="absolute bottom-0 left-4 right-4 h-[3px] bg-[#d13639] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Search Bar - Desktop */}
          <div className="relative group hidden md:block">
            <div className={`flex items-center gap-2 pl-4 pr-3 py-2 md:py-2.5 rounded-full border border-transparent transition-all cursor-pointer w-48 h-[34px] md:h-[38px] ${
              isScrolled ? "bg-[#252423] hover:bg-[#333]" : "bg-white/10 hover:bg-white/20"
            }`}>
              <input 
                type="text" 
                placeholder="SEARCH" 
                className={`bg-transparent border-none outline-none text-[10px] font-black tracking-[0.1em] w-full text-white leading-none h-full transition-colors ${
                  isScrolled ? "placeholder:text-[#9e9e9e]" : "placeholder:text-white"
                }`}
              />
              <Search size={14} className="text-white shrink-0" strokeWidth={3} />
            </div>
          </div>
          
          {/* Language Button */}
          <div className="relative group hidden sm:block">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors focus:bg-white/20 focus:outline-none">
              <Globe size={18} className="text-[#E8E8E8]" />
            </button>
            
            {/* Language Dropdown */}
            <div className="absolute top-full right-1/2 translate-x-1/2 mt-4 w-64 bg-white rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)] opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 overflow-hidden cursor-default">
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white" />
              
              <div className="max-h-[440px] overflow-y-auto py-2">
                <div className="flex items-center justify-between px-6 py-4 hover:bg-[#f2f2f2] cursor-pointer group/item">
                  <span className="text-[11px] font-black tracking-[0.12em] text-[#d13639]">ENGLISH (NA)</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d13639" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                
                {[
                  "INDONESIAN", "MALAYSIAN", "PORTUGUÊS", "ČEŠTINA", "FRANÇAIS", 
                  "DEUTSCH", "ΕΛΛΗΝΙΚΆ", "MAGYAR", "POLSKI", "ROMÂNĂ", "РУССКИЙ",
                  "TÜRKÇE", "日本語", "한국어"
                ].map((lang) => (
                  <button 
                    key={lang} 
                    className="w-full text-left px-6 py-4 hover:bg-[#f2f2f2] cursor-pointer text-[11px] font-black tracking-[0.12em] transition-colors focus:bg-[#f2f2f2] focus:outline-none text-[#8e8e8e] hover:text-black"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sign In Button */}
          <button className="bg-[#d13639] hover:bg-[#eb3e42] text-[#111] text-[10px] font-black tracking-[0.1em] px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all uppercase active:scale-95">
            Sign In
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-0 left-0 w-full h-full bg-[#0a0a0a] z-[100] lg:hidden flex flex-col pt-24 px-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <button 
              className="absolute top-4 right-4 p-3 bg-white/5 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-8 items-center text-center">
              {["Who We Are", "Work with us", "News"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-4xl font-black tracking-tight uppercase hover:text-[#d13639] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              <div className="w-full h-px bg-white/10 my-4" />

              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex items-center gap-3 bg-[#252423] px-6 py-4 rounded-full border border-white/5 w-full max-w-sm">
                  <input 
                    type="text" 
                    placeholder="SEARCH" 
                    className="bg-transparent border-none outline-none text-xs font-black tracking-[0.2em] w-full placeholder:text-[#9e9e9e] text-white"
                  />
                  <Search size={20} className="text-white shrink-0" strokeWidth={3} />
                </div>

                <button className="flex items-center gap-3 text-white/60 font-black tracking-widest uppercase text-xs px-6 py-3 hover:text-white transition-colors">
                  <Globe size={18} />
                  English
                </button>

                <button className="bg-[#d13639] hover:bg-[#eb3e42] text-[#111] text-xs font-black tracking-[0.2em] w-full max-w-sm py-5 rounded-full transition-all uppercase active:scale-95 shadow-lg shadow-red-500/20">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
