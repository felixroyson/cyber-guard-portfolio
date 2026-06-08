import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import OngoingProjects from "@/components/OngoingProjects";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import ParallaxSection from "@/components/ParallaxSection";
import IntroLoader from "@/components/IntroLoader";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
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
      <SectionDivider variant="scan" />
      <ParallaxSection variant="cyan-left">
        <CertificationsTimeline />
      </ParallaxSection>
      <SectionDivider variant="cyber" />
      <ParallaxSection variant="purple-right">
        <ContactSection />
      </ParallaxSection>
      <ScrollToTop />

      <AnimatePresence>
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
