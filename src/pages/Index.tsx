import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import ParallaxSection from "@/components/ParallaxSection";
import IntroLoader from "@/components/IntroLoader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-background cyber-grid relative">
          <Navbar />
          <ParallaxSection variant="cyan-left">
            <HeroSection />
          </ParallaxSection>
          <SectionDivider variant="cyber" />
          <ParallaxSection variant="purple-right">
            <AboutSection />
          </ParallaxSection>
          <SectionDivider variant="pulse" />
          <ParallaxSection variant="dual">
            <SkillsSection />
          </ParallaxSection>
          <SectionDivider variant="scan" />
          <ParallaxSection variant="cyan-left">
            <ProjectsSection />
          </ParallaxSection>
          <SectionDivider variant="glitch" />
          <ParallaxSection variant="center">
            <AchievementsSection />
          </ParallaxSection>
          <SectionDivider variant="cyber" />
          <ParallaxSection variant="purple-right">
            <ContactSection />
          </ParallaxSection>
        </div>
      )}
    </>
  );
};

export default Index;
