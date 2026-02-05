import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { WhatsHappening } from "./components/whats-happening";
import { Games } from "./components/games";
import { Esports } from "./components/esports";
import { Careers } from "./components/careers";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#d13639] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatsHappening />
        <Games />
        <Esports />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default App;
