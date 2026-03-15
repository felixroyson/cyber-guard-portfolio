import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div className="min-h-screen bg-background cyber-grid relative">
    <Navbar />
    <HeroSection />
    <SectionDivider variant="cyber" />
    <AboutSection />
    <SectionDivider variant="pulse" />
    <SkillsSection />
    <SectionDivider variant="scan" />
    <ProjectsSection />
    <SectionDivider variant="glitch" />
    <AchievementsSection />
    <SectionDivider variant="cyber" />
    <ContactSection />
  </div>
);

export default Index;
