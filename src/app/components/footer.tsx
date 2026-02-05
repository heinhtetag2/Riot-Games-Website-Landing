import React from "react";
import { Twitter, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import svgPaths from "../../imports/svg-lvzxdtxuni";

export const Footer = () => {
  const links = [
    "Press", "Security", "Legal", "Leadership", "Candidate Privacy", "Terms of Service", 
    "Privacy Notice", "Player Support", "E-Verify", "Accessibility", "Annual Reports", 
    "Media Resources", "Community Bolt"
  ];

  return (
    <footer className="bg-[#111] text-[#f9f9f9] py-16 px-8 md:px-20 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-12">
          {/* Logo and Nav Links */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4">
              {links.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Twitter size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Instagram size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <div className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
              <svg className="w-4.5 h-4.5" viewBox="0 0 16 16">
                <path d={svgPaths.pcfdfb00} fill="currentColor" />
              </svg>
            </div>
            <Linkedin size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Facebook size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Youtube size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <div className="flex items-center gap-4">
            <svg className="w-10 h-10" viewBox="0 0 26 26" fill="none">
              <path d={svgPaths.p1a8d6180} fill="#F1F5F1" />
              <path d={svgPaths.p1d41d6f0} fill="#050505" />
              <path d={svgPaths.p1e029600} fill="#050505" />
            </svg>
            <div className="text-[10px] font-bold tracking-widest opacity-40 uppercase">
              Cookie Preferences | © 2026 Riot Games, Inc. All rights reserved.
            </div>
          </div>
          
          <button className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
            To the surface
            <span className="text-lg">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
